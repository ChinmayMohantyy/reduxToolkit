import React from 'react'
import { Checkbox, FormControlLabel, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, InputAdornment } from '@mui/material';
import { Delete } from '@mui/icons-material';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../Redux/ReduxSlice/Todo/todoSlice';

const Todos = () => {

  const todos = useSelector(store => store.todos)
  const dispatch = useDispatch();

  console.log(todos,"00000");
  return (
    <div>
      <List>
        {todos.map((todo) => (
          <ListItem key={todo.id}>
            <FormControlLabel
              control={
                <Checkbox
                  // checked={task.completed}
                  // onChange={() => handleToggleComplete(index)}
                  color="primary"
                />
              }
              label={todo.text}
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" color="warning"
                onClick={() => dispatch(removeTodo(todo.id))}
              >
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))} 
      </List>
    </div>
  )
}

export default Todos