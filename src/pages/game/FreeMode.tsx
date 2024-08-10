import { useRef } from 'react';

import { IRefPhaserGame, PhaserGame } from '@/game/PhaserGame';

const FreeMode: React.FC = () => {
  //  References to the PhaserGame component (game and scene are exposed)
  const phaserRef = useRef<IRefPhaserGame | null>(null);

  // Event emitted from the PhaserGame component
  const currentScene = (scene: Phaser.Scene) => {};

  return (
    <div className="flex h-full flex-1 flex-col overflow-clip">
      <PhaserGame ref={phaserRef} currentActiveScene={currentScene} />
    </div>
  );
};

export default FreeMode;
