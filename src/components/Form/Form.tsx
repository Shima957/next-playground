import { VFC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import Button from '../Button/Button';
import Input from '../Input/Input';

type FormValue = {
  email: string;
  password: string;
};

type Props = {
  login: jest.Mock<
    Promise<{
      email: any;
      password: any;
    }>
  >;
};

const Form: VFC<Props> = ({ login }) => {
  const methods = useForm<FormValue>();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = methods;
  const onSubmit = (data: FormValue) => login(data.email, data.password);

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className='w-[360px] border border-gray-300 p-4 rounded-md space-y-2'>
          <label htmlFor='email'>email</label>
          <input
            id='email'
            {...register('email', {
              required: 'required',
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Entered value does not match email format',
              },
            })}
            type='email'
            className={`w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 ring-offset-2${
              errors.email?.message &&
              'border border-red-500 focus:ring-2 focus:ring-red-500'
            }`}
          />
          {errors.email && (
            <span role='alert' className='text-red-500'>
              {errors.email.message}
            </span>
          )}
          <label htmlFor='password' className='block'>
            password
          </label>
          <input
            id='password'
            {...register('password', {
              required: 'required',
              minLength: {
                value: 5,
                message: 'min length is 5',
              },
            })}
            type='password'
            className={`w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 ring-offset-2${
              errors.password?.message &&
              'border border-red-500 focus:ring-2 focus:ring-red-500'
            }`}
          />
          {errors.password && (
            <span role='alert' className='text-red-500'>
              {errors.password.message}
            </span>
          )}
          <div className='flex justify-end space-x-2'>
            <Button
              type='submit'
              title='キャンセル'
              styleType='secondary'
              size='md'
            />

            <Button type='submit' title='確定' styleType='primary' size='md' />
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default Form;
