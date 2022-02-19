import { FC } from 'react';
import { FieldError } from 'react-hook-form';

type Props = {
  label: string;
  error?: FieldError | undefined;
};

const FormField: FC<Props> = ({ label, error, children }) => {
  return (
    <div className='space-y-2'>
      <label className='text-lg font-bold'>{label}</label>
      <div>{children}</div>
      {error?.message && (
        <div
          role='alert'
          aria-label={error.message}
          className='text-sm font-medium text-red-500'
        >
          {error.message}
        </div>
      )}
    </div>
  );
};

export default FormField;
