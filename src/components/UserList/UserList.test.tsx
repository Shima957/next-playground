import UserList from './UserList';
import { server } from '../../mocks/server';
import { render } from '@testing-library/react';
import { rest } from 'msw';
import 'whatwg-fetch';
import '@testing-library/jest-dom';

describe('UserList.vue', () => {
  // Establish API mocking before all tests.
  beforeAll(() => server.listen());
  // Reset any request handlers that we may add during the tests,
  // so they don't affect other tests.
  afterEach(() => server.resetHandlers());
  // Clean up after the tests are finished.
  afterAll(() => server.close());

  test('API コールが完了するまではローディングが表示されユーザー一覧が表示されない', async () => {
    const { findByText, queryAllByTestId } = render(<UserList />);

    expect(await findByText('Loading...')).toBeInTheDocument();
    expect(queryAllByTestId('user')).toHaveLength(0);
  });

  test('API コールが完了したらローディングの表示はなくなりユーザー名の一覧が表示される', async () => {
    const { findByText, queryByText, findAllByTestId } = render(<UserList />);

    expect(await findAllByTestId('user')).toHaveLength(3);
    expect(await findByText('John')).toBeInTheDocument();
    expect(queryByText('Loading...')).not.toBeInTheDocument();
  });

  test('API コールが失敗したらエラーメッセージが表示される', async () => {
    server.use(
      rest.get('/api/users', (req, res, ctx) => {
        return res.once(
          ctx.status(500),
          ctx.json({ message: 'Internal Server Error' })
        );
      })
    );

    const { findByText, queryByText } = render(<UserList />);

    expect(await findByText('Something went wrong...')).toBeInTheDocument();
    expect(queryByText('Loading...')).not.toBeInTheDocument();
  });
});
