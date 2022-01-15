import React, { ChangeEvent } from 'react';

const Todo = () => {
  const [input, setInput] = React.useState('');
  const [list, setList] = React.useState(['タスクA', 'タスクB', 'タスクC']);
  const updateValue = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const addNew = () => {
    let copiedList = [...list];
    copiedList.push(input);
    setList(copiedList);
    setInput('');
  };
  return (
    <div className='todo'>
      <input type='text' onChange={updateValue} value={input} />
      <button disabled={!input} onClick={addNew}>
        Todoを追加
      </button>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
