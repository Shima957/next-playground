import Button from '@/components/Button/Button';
import { signIn, useSession } from 'next-auth/react';

export default function Home() {
  const { data: session } = useSession();

  return (
    <div>
      {!session && (
        <Button
          title='ログイン'
          size='md'
          styleType='primary'
          type='button'
          onClick={() => signIn('twitter', { callbackUrl: '/2' })}
        />
      )}
    </div>
  );
}
