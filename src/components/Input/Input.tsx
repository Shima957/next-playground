import { ChangeEvent, VFC } from 'react';

type Props = {
  defaultValue?: string;
  type: string;
  value: string;
  onChange: (value: string) => void;
};

const Input: VFC<Props> = ({ defaultValue, type, value, onChange }) => {
  return (
    <input
      defaultValue={defaultValue}
      type={type}
      value={value}
      onChange={(event: ChangeEvent<HTMLInputElement>) =>
        onChange(event.target.value)
      }
      className='w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 ring-offset-2'
    />
  );
};

export default Input;
