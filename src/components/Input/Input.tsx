import { VFC } from 'react';

type Props = {
  defaultValue?: string;
  name: string;
};

const Input: VFC<Props> = ({ defaultValue, name }) => {
  return (
    <>
      <input
        defaultValue={defaultValue}
        type='email'
        className='w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 ring-offset-2'
      />
    </>
  );
};

export default Input;
