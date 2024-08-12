import { ChangeEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import ColorPicker from '@/components/auth/ColorPicker';
import PatternPicker from '@/components/auth/PatternPicker';
import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import Avatar from '@/components/common/Avatar';
// import { HomeRoutes } from '@/constants/route';
import { GameRoutes } from '@/constants/route';

const CompleteProfile: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>('');
  const [avatarUri, setAvatarUri] = useState<string>('');

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleCompleteClick = () => {
    // navigate(`/${HomeRoutes.ROOT}`);
    navigate(`/${GameRoutes.ROOT}/${GameRoutes.FREE}`);
  };

  return (
    <div className="flex flex-col items-center gap-y-4">
      <div className="flex flex-col items-center text-white">
        <p className="text-2xl">Complete Your Profile</p>
      </div>
      <div>
        <Avatar avatar={avatarUri} setAvatar={setAvatarUri} username={username} />
      </div>
      <div className="w-full">
        <Input
          type="text"
          name="username"
          label="User Name"
          placeholder="Type your name"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
      <div className="grid w-full grid-cols-2 gap-x-5">
        <ColorPicker />
        <PatternPicker />
      </div>
      <div className="flex w-full flex-col gap-y-4">
        <Button variant="contained" onClick={handleCompleteClick}>
          Complete
        </Button>
        <Link
          to={''}
          className="self-center text-white hover:opacity-90 active:opacity-70"
        >
          Terms & Policy
        </Link>
      </div>
    </div>
  );
};

export default CompleteProfile;
