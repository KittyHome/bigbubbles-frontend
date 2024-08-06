import { PropsWithChildren } from 'react';
import clsx from 'clsx';

type Variant = 'contained' | 'outline' | 'text';

interface ButtonProps extends PropsWithChildren {
  variant?: Variant;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'text',
  className = '',
  children,
}) => {
  const variantClasses = variant === 'text' ? 'bg-transparent text-primary-text' : '';
  return <button className={clsx(variantClasses, className)}>{children}</button>;
};

export default Button;
