import { ButtonHTMLAttributes, FC } from 'react';
import Loading from '../Loading';

const variants = {
  primary:
    'bg-sky-500 text-white hover:bg-sky-600 focus:ring focus:ring-sky-300',
  secondary:
    'border border-gray-300 text-gray-600 focus:ring focus:ring-gray-300',
};

const sizes = {
  sm: 'py-2 px-4 text-sm',
  md: 'py-2 px-6 text-md',
  lg: 'py-3 px-8 text-lg',
};

type Props = {
  size: keyof typeof sizes;
  variant?: keyof typeof variants;
  isLoading?: boolean;
  onClick?: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<Props> = ({
  size = 'md',
  variant = 'primary',
  type = 'button',
  isLoading = false,
  onClick,
  children,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isLoading}
      className={`flex justify-center items-center h-10 px-2 rounded-md font-bold disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none focus:ring-offset-2
      ${variants[variant]} ${sizes[size]}`}
    >
      {isLoading && <Loading />}
      <span>{children}</span>
    </button>
  );
};

export default Button;
