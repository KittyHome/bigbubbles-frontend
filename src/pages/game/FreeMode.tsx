import { useRef } from 'react';
import { RiHomeLine } from 'react-icons/ri';
import { IoSettingsOutline } from 'react-icons/io5';

import StressBar from '@/components/game/StressBar';
import { IRefPhaserGame, PhaserGame } from '@/game/PhaserGame';

const FreeMode: React.FC = () => {
  //  References to the PhaserGame component (game and scene are exposed)
  const phaserRef = useRef<IRefPhaserGame | null>(null);

  // Event emitted from the PhaserGame component
  const currentScene = (scene: Phaser.Scene) => {};

  return (
    <div className="relative flex h-full flex-1 flex-col overflow-clip">
      <PhaserGame ref={phaserRef} currentActiveScene={currentScene} />
      <div className="absolute left-8 top-8 flex flex-col gap-y-2.5">
        <span className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-2xl bg-secondary-background text-white hover:opacity-80">
          <RiHomeLine size={24} />
        </span>
        <span className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-2xl bg-secondary-background text-white hover:opacity-80">
          <IoSettingsOutline size={24} />
        </span>
      </div>
      <StressBar percent={42.68} />
    </div>
  );
};

export default FreeMode;
