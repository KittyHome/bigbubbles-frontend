import { AUTO, Game } from 'phaser';

import { Boot } from './scenes/Boot';
import { Preloader } from './scenes/Preloader';
import { Playground } from './scenes/Playground';

//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
const config: Phaser.Types.Core.GameConfig = {
  type: AUTO,
  width: 500,
  height: 500,
  scale: {
    mode: Phaser.Scale.NONE,
  },
  parent: 'game-container',
  backgroundColor: '#1F2336',
  scene: [Boot, Preloader, Playground],
};

const StartGame = (parent: string) => {
  const game_container_dom = document.getElementById(parent);

  const game = new Game({
    ...config,
    parent,
    width: game_container_dom?.clientWidth,
    height: game_container_dom?.clientHeight,
  });

  window.addEventListener('resize', () => {
    const game_container_dom = document.getElementById(parent);

    game.scale.resize(
      game_container_dom?.clientWidth || 500,
      game_container_dom?.clientHeight || 500,
    );
  });

  return game;
};

export default StartGame;
