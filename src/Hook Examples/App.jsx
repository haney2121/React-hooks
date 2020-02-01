import React, { useReducer, useState } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: action.id, text: action.text, completed: false }
        ],
        todoCount: state.todoCount + 1
      };
    case 'STATUS':
      return {
        todos: state.todos.map(todo =>
          todo.id === action.id
            ? { ...todo, completed: action.completed }
            : todo
        )
      };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, { todos: [], todoCount: 0 });
  const [text, setText] = useState('');

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          dispatch({ type: 'ADD', text: text, id: state.todos.length });
          setText('');
        }}
      >
        <input value={text} onChange={e => setText(e.target.value)} />
      </form>
      {state.todos.map(todo => {
        return (
          <li
            key={todo.id}
            className={todo.completed ? 'strike' : ''}
            onClick={() =>
              dispatch({
                type: 'STATUS',
                id: todo.id,
                completed: !todo.completed
              })
            }
          >
            {todo.text}
          </li>
        );
      })}
      Todo Count: {state.todoCount}
      <pre>{JSON.stringify(state.todos, null, 2)}</pre>
    </div>
  );
};

export default App;
