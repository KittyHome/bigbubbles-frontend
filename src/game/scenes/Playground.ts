import { Scene, Types } from "phaser";

import { EventBus } from "../EventBus";
import { Bubble } from "../components/Bubble";
import { Grid } from "../components/Grid";

export class Playground extends Scene {
  private cursors!: Types.Input.Keyboard.CursorKeys;
  private bubble!: Bubble; // Add a property for the bubble
  private grid!: Grid;

  constructor() {
    super("Playground");
  }

  create() {
    EventBus.emit("current-scene-ready", this);

    // Enable keyboard input
    this.cursors = this.input.keyboard!.createCursorKeys();

    this.grid = new Grid(this);

    // Create a bubble
    this.bubble = new Bubble(
      this,
      this.cameras.main.width / 2,
      this.cameras.main.height / 2,
      50,
      0xff0000,
    );
    this.bubble.setDepth(1);

    // Make the camera follow the bubble
    this.cameras.main.startFollow(this.bubble);

    this.scale.on("resize", (gameSize: Phaser.Scale.ScaleManager) => {
      const width = gameSize.width;
      const height = gameSize.height;

      this.cameras.resize(width, height);
    });
  }

  update() {
    this.bubble.move(this.cursors);

    this.grid.updateGrid();
  }

  changeScene() {
    this.scene.start("Game");
  }
}
