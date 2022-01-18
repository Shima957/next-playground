import { VFC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import Button from '../Button/Button';

type FormValue = {
  email: string;
  password: string;
};

const Form: VFC = () => {
  const methods = useForm<FormValue>();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = methods;
  const onSubmit = (data: FormValue) => console.log(data);

  return (
    <div className='w-[360px] border border-gray-300 p-4 rounded-md space-y-2'>
      <h2 className='text-center text-xl font-bold'>ログイン</h2>
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className='space-y-2'
        >
          <label htmlFor='email'>メールアドレス</label>
          <input
            id='email'
            {...register('email', {
              required: 'メールアドレスは必須です',
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: '正しい書式で入力してください',
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
            パスワード
          </label>
          <input
            id='password'
            {...register('password', {
              required: 'パスワードは必須です',
              minLength: {
                value: 5,
                message: 'パスワードは5文字以上です',
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
              size='sm'
            />

            <Button type='submit' title='確定' styleType='primary' size='sm' />
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default Form;
