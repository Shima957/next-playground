import Button from '@/components/atoms/Button/Button';
import FormField from '@/components/atoms/FormField/FormField';
import { useForm } from 'react-hook-form';
import Form from '../../atoms/Form/Form';
import Input from '../../atoms/Input/Input';

type FormValue = {
  email: string;
  password: string;
};

const SignInForm = () => {
  const methods = useForm<FormValue>();
  const onSubmit = (data: FormValue) => {
    console.log(data);
  };

  return (
    <div className='w-[300px] mx-auto'>
      <Form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className='space-y-4'>
          <h2 className='text-lg font-bold text-center'>Sign in</h2>
          <FormField label='Email' error={methods.formState.errors.email}>
            <Input
              type='email'
              placeholder='email'
              error={methods.formState.errors.email}
              registeration={methods.register('email', {
                required: '必須です',
              })}
            />
          </FormField>
          <FormField label='Password' error={methods.formState.errors.password}>
            <Input
              type='password'
              placeholder='password'
              error={methods.formState.errors.password}
              registeration={methods.register('password', {
                required: '必須です',
              })}
            />
          </FormField>
          <div className='flex justify-end'>
            <Button type='submit' variant='primary' size='md'>
              Sing In
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default SignInForm;
