import { useSession } from 'next-auth/react';

const Second = () => {
  const { data: session } = useSession();
  return <h2>Second</h2>;
};

export default Second;
