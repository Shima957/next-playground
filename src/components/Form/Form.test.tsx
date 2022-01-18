import { composeStories } from '@storybook/testing-react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import * as stories from './Form.stories';

describe('Form', () => {
  const { RequiredError, ValidationError } = composeStories(stories);

  test('必須項目未入力の場合', async () => {
    const { container } = render(<RequiredError />);
    await RequiredError.play({ canvasElement: container });
    const alerts = await screen.findAllByRole('alert');
    expect(alerts).toHaveLength(2);
    expect(alerts[0]).toHaveTextContent('メールアドレスは必須です');
    expect(alerts[1]).toHaveTextContent('パスワードは必須です');
  });

  test('バリデーションエラーの場合', async () => {
    const { container } = render(<ValidationError />);
    await ValidationError.play({ canvasElement: container });
    const alerts = await screen.findAllByRole('alert');
    expect(alerts).toHaveLength(2);
    expect(alerts[0]).toHaveTextContent('正しい書式で入力してください');
    expect(alerts[1]).toHaveTextContent('パスワードは5文字以上です');
  });
});
