import { Scene, GameObjects } from "phaser";

const LIMIT_LINE_COLOR = 0xff0000;
const NORMAL_LINE_COLOR = 0x000000;

export class Grid {
  private scene: Scene;
  private gridSize: number;
  private gridLines: GameObjects.Line[] = [];
  private gridLabels: GameObjects.Text[] = [];
  private limitX: number;
  private limitY: number;

  constructor(
    scene: Scene,
    gridSize: number = 100,
    limitX: number = 50,
    limitY: number = 50,
  ) {
    this.scene = scene;
    this.gridSize = gridSize;
    this.limitX = limitX;
    this.limitY = limitY;
    this.updateGrid();
  }

  updateGrid() {
    const camera = this.scene.cameras.main;
    const width = camera.width;
    const height = camera.height;

    // Clear existing lines and labels
    this.gridLines.forEach((line) => line.destroy());
    this.gridLabels.forEach((label) => label.destroy());
    this.gridLines = [];
    this.gridLabels = [];

    // Calculate the starting positions for the grid lines
    const startX =
      Math.floor(camera.worldView.x / this.gridSize) * this.gridSize;
    const startY =
      Math.floor(camera.worldView.y / this.gridSize) * this.gridSize;

    // Draw vertical lines and labels
    for (let x = startX; x < camera.worldView.x + width; x += this.gridSize) {
      const labelIndex = Math.floor(x / this.gridSize);
      const color =
        labelIndex === 0 || labelIndex === this.limitX
          ? LIMIT_LINE_COLOR
          : NORMAL_LINE_COLOR;
      const strokeWidth =
        labelIndex === 0 || labelIndex === this.limitX ? 1 : 0.2;
      const line = this.scene.add.line(
        0,
        0,
        x,
        camera.worldView.y,
        x,
        camera.worldView.y + height,
        color,
        strokeWidth,
      );

      line.setOrigin(0, 0);
      this.gridLines.push(line);

      const label = this.scene.add.text(
        x + 5,
        camera.worldView.y + 5,
        `V${labelIndex}`,
        { color: "#000" },
      );

      label.setOrigin(0, 0);
      this.gridLabels.push(label);
    }

    // Draw horizontal lines and labels
    for (let y = startY; y < camera.worldView.y + height; y += this.gridSize) {
      const labelIndex = Math.floor(y / this.gridSize);
      const color =
        labelIndex === 0 || labelIndex === this.limitY
          ? LIMIT_LINE_COLOR
          : NORMAL_LINE_COLOR;
      const strokeWidth =
        labelIndex === 0 || labelIndex === this.limitY ? 1 : 0.2;
      const line = this.scene.add.line(
        0,
        0,
        camera.worldView.x,
        y,
        camera.worldView.x + width,
        y,
        color,
        strokeWidth,
      );

      line.setOrigin(0, 0);
      this.gridLines.push(line);

      const label = this.scene.add.text(
        camera.worldView.x + 5,
        y + 5,
        `H${labelIndex}`,
        { color: "#000" },
      );

      label.setOrigin(0, 0);
      this.gridLabels.push(label);
    }
  }
}
