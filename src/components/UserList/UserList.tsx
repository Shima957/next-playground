import useSWR from 'swr';

interface User {
  id: number;
  name: string;
}

const UserList = () => {
  const fecher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR<User[]>('/api/users', fecher);

  if (!data) return <div>Loading...</div>;
  if (error) return <div>Something went wrong...</div>;

  return (
    <ul>
      {data.map((user) => (
        <li key={user.id} data-testid='user'>
          {user.name}
        </li>
      ))}
    </ul>
  );
};

export default UserList;
