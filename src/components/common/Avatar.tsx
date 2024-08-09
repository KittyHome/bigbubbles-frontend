import { ChangeEvent, useRef } from 'react';
import { NameInitialsAvatar } from 'react-name-initials-avatar';
import { MdCamera, MdRemoveCircle } from 'react-icons/md';

import { Colors } from '@/constants/color';

interface AvatarProps {
  avatar: string;
  setAvatar: (avatar: string) => void;
  username: string;
}

const Avatar: React.FC<AvatarProps> = ({ avatar, setAvatar, username }) => {
  const avatarRef = useRef<HTMLInputElement>(null);

  const handleAvatarChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length === 0) return;
    const reader = new FileReader();
    reader.addEventListener(
      'load',
      () => {
        setAvatar(reader.result as string);
      },
      false,
    );

    reader.readAsDataURL(e.target.files![0]);
  };

  const handleChangeClick = (e: any) => {
    if (avatar) {
      e.preventDefault();
      setAvatar('');
      if (avatarRef.current) avatarRef.current.value = '';
    }
  };

  return (
    <div className="group relative h-[110px] w-[110px] overflow-hidden rounded-full bg-primary-avatar">
      {avatar === '' ? (
        <NameInitialsAvatar
          name={username}
          size="110px"
          textSize="48px"
          bgColor={Colors.Inherit}
          textColor={Colors.TextAvatar}
          borderWidth="0px"
        />
      ) : (
        <img src={avatar} alt="Avatar" />
      )}

      <div className="absolute left-0 top-0 hidden h-full w-full items-center justify-center rounded-full backdrop-blur group-hover:flex">
        <label
          htmlFor="avatar-input-id"
          className="cursor-pointer text-white hover:underline"
          onClick={handleChangeClick}
        >
          {avatar === '' ? <MdCamera size={32} /> : <MdRemoveCircle size={32} />}
        </label>
        <input
          ref={avatarRef}
          id="avatar-input-id"
          type="file"
          accept="image/*"
          onChange={handleAvatarChange}
          hidden
        />
      </div>
    </div>
  );
};

export default Avatar;
