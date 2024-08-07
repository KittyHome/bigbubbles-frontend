import { PropsWithChildren } from 'react';
import clsx from 'clsx';

type Variant = 'contained' | 'outline' | 'text';
type Color = 'primary' | 'secondary';

interface ButtonProps extends PropsWithChildren {
  variant?: Variant;
  className?: string;
  color?: Color;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'text',
  className = '',
  color = 'primary',
  children,
}) => {
  const commonClasses =
    'text-white px-4 py-2.5 rounded-xl flex items-center gap-x-4 justify-center drop-shadow-button';
  const variantClasses = variant === 'text' ? 'bg-transparent text-primary-text' : '';
  const colorClasses =
    color === 'primary'
      ? 'bg-primary-gradient hover:opacity-90 active:opacity-70'
      : color === 'secondary'
      ? 'bg-secondary-background hover:opacity-90 active:opacity-70'
      : '';
  return (
    <button className={clsx(commonClasses, colorClasses, variantClasses, className)}>
      {children}
    </button>
  );
};

export default Button;
