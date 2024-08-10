import { GameObjects, Scene, Types } from "phaser";

export class BasicBubble extends GameObjects.Ellipse {
  public gas: number = 10;

  constructor(
    scene: Scene,
    x: number,
    y: number,
    radius: number,
    color: number,
  ) {
    super(scene, x, y, radius * 2, radius * 2, color);
    scene.add.existing(this);
  }
}

export class Bubble extends BasicBubble {
  public velocity: number = 3;
  public friction: number = 0.99;
  private velocityX: number = 0;
  private velocityY: number = 0;

  constructor(
    scene: Scene,
    x: number,
    y: number,
    radius: number,
    color: number,
  ) {
    super(scene, x, y, radius, color);
  }

  move(cursors: Types.Input.Keyboard.CursorKeys) {
    let directionX = 0;
    let directionY = 0;

    // Determine direction based on keyboard input
    if (cursors.left.isDown) {
      directionX = -1;
    } else if (cursors.right.isDown) {
      directionX = 1;
    }

    if (cursors.up.isDown) {
      directionY = -1;
    } else if (cursors.down.isDown) {
      directionY = 1;
    }

    // Normalize direction to ensure consistent speed
    const magnitude = Math.sqrt(
      directionX * directionX + directionY * directionY,
    );

    if (magnitude > 0) {
      directionX /= magnitude;
      directionY /= magnitude;
    }

    // Update velocity based on direction
    this.velocityX += directionX * this.velocity;
    this.velocityY += directionY * this.velocity;

    // Calculate the current speed
    const currentSpeed = Math.sqrt(
      this.velocityX * this.velocityX + this.velocityY * this.velocityY,
    );

    // Normalize the velocity to the maximum speed if it exceeds the limit
    if (currentSpeed > this.velocity) {
      this.velocityX = (this.velocityX / currentSpeed) * this.velocity;
      this.velocityY = (this.velocityY / currentSpeed) * this.velocity;
    }

    // Update position based on velocity
    this.x += this.velocityX;
    this.y += this.velocityY;

    // Apply friction to slow down the bubble over time
    this.velocityX *= this.friction;
    this.velocityY *= this.friction;

    // Stop the bubble if the velocity is very low
    if (Math.abs(this.velocityX) < 0.01) this.velocityX = 0;
    if (Math.abs(this.velocityY) < 0.01) this.velocityY = 0;
  }

  consume(basicBubble: BasicBubble) {
    if (this.getBounds().contains(basicBubble.x, basicBubble.y)) {
      this.gas += basicBubble.gas;
      basicBubble.destroy();
    }
  }
}
