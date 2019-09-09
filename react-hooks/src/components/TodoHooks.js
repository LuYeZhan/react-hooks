import React, {useState} from 'react'

const TodoHooks = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    return (
        <div>
            <h1>My hooks Todo List</h1>
            <form>
                <input name='title' value= {title}/>
                <input name='description'
                value= {description}/>
            </form>
        </div>
    )
}
export default TodoHooks;