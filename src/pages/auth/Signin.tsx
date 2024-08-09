import { useState } from 'react';

import LoginWithEmail from '@/components/auth/LoginWithEmail';
import CompleteProfile from '@/components/auth/CompleteProfile';
import { Staging } from '@/constants/staging';

const Signin: React.FC = () => {
  const [stage, setStage] = useState<Staging>(Staging.LoginWithEmail);

  const handleNextStageClick = () => {
    if (stage === Staging.LoginWithEmail) {
      setStage(Staging.CompleteProfile);
    }
  };

  return (
    <div className="absolute right-16 top-1/2 z-50 w-full max-w-[400px] -translate-y-1/2 rounded-[32px] border-1 border-primary-border/30 bg-primary-background/20 px-10 py-16 backdrop-blur-lg">
      {stage === Staging.LoginWithEmail ? (
        <LoginWithEmail onNextStage={handleNextStageClick} />
      ) : (
        <CompleteProfile />
      )}
    </div>
  );
};

export default Signin;
