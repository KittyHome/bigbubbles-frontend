import { Link } from "react-router-dom";

import Button from "@/components/common/Button";
import Input from "@/components/common/Input";

interface LoginWithEmailProps {
  onNextStage: () => void;
}

const LoginWithEmail: React.FC<LoginWithEmailProps> = ({ onNextStage}) => {
    return <div className="flex flex-col items-center gap-y-8">
    <div className="text-center font-Poppins text-white">
      <p className="text-4xl leading-[45px]">Welcome to</p>
      <span className="text-5xl font-bold leading-[50px]">BigBubbles</span>
    </div>
    <div className="flex w-full flex-col">
      <Input
        label="Email"
        name="email"
        placeholder="Example@email.com"
        className="mb-4"
      />
      <Input
        label="Password"
        type="password"
        name="password"
        placeholder="Type your password"
        className="mb-2.5"
      />
      <Link
        to={'/auth/forgot-password'}
        className="self-end text-sm text-primary-text hover:opacity-90 active:opacity-70"
      >
        Forgot Password?
      </Link>
    </div>
    <div className="flex w-full flex-col gap-y-4">
      <Button variant="contained" onClick={onNextStage}>Continue with Email</Button>
      <div className="flex items-center gap-x-2">
        <div className="h-0.5 grow border-1 border-primary-border"></div>
        <span className="text-white">Or</span>
        <div className="h-0.5 grow border-1 border-primary-border"></div>
      </div>
      <Button variant="contained" color="secondary">
        <img src="/icons/google.png" alt="Google Logo" />
        <span>
          Continue with <b>Google</b>
        </span>
      </Button>
      <Link
        to={''}
        className="self-center text-white hover:opacity-90 active:opacity-70"
      >
        Terms & Policy
      </Link>
    </div>
  </div>;
}

export default LoginWithEmail;