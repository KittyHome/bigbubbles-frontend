import { Link } from 'react-router-dom';

import Input from '../../components/common/Input';

const Signin: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-y-[50px] rounded-[50px] bg-primary-background px-10 py-16">
      <div className="font-Poppins text-white">
        <p className="text-[40px] leading-[51px]">Welcome to</p>
        <span className="text-[45px] font-bold leading-[49px]">BigBubbles</span>
      </div>
      <div className="flex flex-col">
        <Input
          label="Email"
          name="email"
          placeholder="Example@email.com"
          className="mb-6"
        />
        <Input
          label="Password"
          type="password"
          name="password"
          placeholder="Characters"
          className="mb-3.5"
        />
        <Link to={'/auth/forgot-password'} className="self-end text-sm text-primary-text">
          Forgot Password?
        </Link>
      </div>
      <div className="flex flex-col"></div>
    </div>
  );
};

export default Signin;
