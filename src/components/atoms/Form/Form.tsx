import { FC } from 'react';
import { SubmitHandler } from 'react-hook-form';

type Props = {
  onSubmit: () => void;
};

const Form: FC<Props> = ({ children, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className='border border-gray p-4 rounded-md'>
      {children}
    </form>
  );
};

export default Form;
