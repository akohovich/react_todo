import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/AppHeader';
import SearchBlock from './components/SearchBlock';
import TodoList from './components/TodoList';






const App = () => {
  return (
    <div>
      <div>
        <AppHeader />
        <SearchBlock />
        <TodoList />
      </div>
      <div>
        <p>lorem</p>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));