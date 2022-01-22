import { VFC } from 'react';
import Loading from '../Loading';

type Props = {
  size: 'sm' | 'md' | 'lg';
  styleType: 'primary' | 'secondary';
  title: string;
  type: 'button' | 'submit';
  isLoading?: boolean;
  onClick?: () => void;
};

const Button: VFC<Props> = ({
  size,
  styleType,
  title,
  type,
  isLoading,
  onClick,
}) => {
  const buttonSize = (size: 'sm' | 'md' | 'lg') => {
    if (size === 'sm') return 'w-24';
    if (size === 'md') return 'w-36';
    if (size === 'lg') return 'w-96';
  };

  const primary =
    'bg-sky-500 text-white hover:bg-sky-600 focus:ring focus:ring-sky-300 focus:ring-offset-2';

  const secondary =
    'border border-gray-300 focus:ring focus:ring-gray-500 focus:ring-offset-2';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isLoading}
      className={`flex justify-center items-center h-10 px-2 rounded-md font-bold disabled:cursor-not-allowed disabled:opacity-50
        ${styleType === 'primary' && primary}
        ${styleType === 'secondary' && secondary}
        ${buttonSize(size)}
      `}
    >
      {isLoading ? <Loading /> : title}
    </button>
  );
};

export default Button;
