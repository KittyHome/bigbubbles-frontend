import { Link } from 'react-router-dom';

import Input from '../../components/common/Input';
import Button from '../../components/common/Button';

import GoogleIcon from '../../assets/icons/google.png';

const Signin: React.FC = () => {
  return (
    <div className="absolute right-16 top-1/2 z-50 w-full max-w-[400px] -translate-y-1/2 rounded-[32px] border-1 border-primary-border/30 bg-primary-background/20 px-10 py-16 backdrop-blur">
      <div className="flex flex-col items-center gap-y-8">
        <div className="text-center font-Poppins text-white">
          <p className="text-[40px] leading-[51px]">Welcome to</p>
          <span className="text-[45px] font-bold leading-[49px]">BigBubbles</span>
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
            placeholder="Characters"
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
          <Button variant="contained">Sign In</Button>
          <div className="flex items-center gap-x-2">
            <div className="h-0.5 grow border-1 border-primary-border"></div>
            <span className="text-white">Or</span>
            <div className="h-0.5 grow border-1 border-primary-border"></div>
          </div>
          <Button variant="contained" color="secondary">
            <img src={GoogleIcon} />
            Sign in with Google
          </Button>
          <Link
            to={''}
            className="self-center text-white hover:opacity-90 active:opacity-70"
          >
            Terms & Policy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signin;
