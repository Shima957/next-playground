import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Todo from './Todo';

describe('Todoコンポーネントテスト', () => {
  it('初期状態でdisabledになっているか', () => {
    render(<Todo />);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });
});
