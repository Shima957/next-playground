import { VFC } from 'react';

type Props = {
  size: 'sm' | 'md' | 'lg';
  styleType: 'primary' | 'secondary';
  title: string;
  type: 'button' | 'submit';
};

const Button: VFC<Props> = ({ size, styleType, title, type }) => {
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
      className={`p-2 rounded-md ${styleType === 'primary' && primary} ${
        styleType === 'secondary' && secondary
      } ${buttonSize(size)}`}
    >
      {title}
    </button>
  );
};

export default Button;
