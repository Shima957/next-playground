import { VFC } from 'react';
import { useFormContext } from 'react-hook-form';

type Props = {
  defaultValue?: string;
};

const Input: VFC<Props> = ({ defaultValue }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<{ email: string }>();

  return (
    <>
      <input
        defaultValue={defaultValue}
        type='email'
        {...register('email', {
          required: 'メールアドレスは必須です',
          pattern: {
            value:
              /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            message: 'メールアドレスの形式が正しくありません',
          },
        })}
        className='w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 ring-offset-2'
      />
      {errors.email?.type === 'required' && (
        <span className='text-red-500'>{errors.email.message}</span>
      )}
    </>
  );
};

export default Input;
