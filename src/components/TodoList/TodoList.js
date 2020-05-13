
import React from 'react';

import './TodoList.css';
import TodoListItem from '../TodoListItem';

const TodoList = ({todoItems, onDelete}) => {

    const elements = todoItems.map((element) => {
        
        const {id, ...otherProps} = element;

        return (
            <li key={id} className="list-group-item">
                <TodoListItem {...otherProps}
                onDelete={() => onDelete(id)}/>
            </li>
        );
    });

    return (<ul className="list-group">
        {elements}
    </ul>);
  
  }

  export default TodoList;