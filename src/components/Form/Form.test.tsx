import { render, screen, fireEvent } from '@testing-library/react';
import Form from './Form';

const mockLogin = jest.fn((email, password) => {
  return Promise.resolve({ email, password });
});

describe('From', () => {
  beforeEach(() => {
    render(<Form login={mockLogin} />);
  });

  it('should display reuired error when value is invalid', async () => {
    fireEvent.submit(screen.getByRole('button'));

    expect(await screen.findAllByRole('alert')).toHaveLength(2);
    expect(mockLogin).not.toBeCalled();
  });
});
