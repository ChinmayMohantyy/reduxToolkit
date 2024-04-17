import React, { useState } from 'react'
import { TextField, Button, InputAdornment } from '@mui/material';
import { useDispatch } from 'react-redux';
import {addTodo} from "../Redux/ReduxSlice/Todo/todoSlice"

const AddTodo = () => {
    const [input,setInput] = useState("");
    const dispatch = useDispatch();

    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(addTodo(input));
        setInput("");
    }
    return (
        <div>
            <form
            onSubmit={handleSubmit}
            >
                <TextField
                    label="Add Task"
                    variant="outlined"
                    value={input}
                    onChange={(e)=>setInput(e.target.value)}
                    fullWidth
                    margin="normal"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <Button type="submit" variant="contained" color="primary">
                                    Add
                                </Button>
                            </InputAdornment>
                        ),
                    }}
                />
            </form>
        </div >
    )
}

export default AddTodo