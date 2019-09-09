import React, { Component } from 'react'

export class TodoClass extends Component {
    wtate = {
        title: '',
        description: ''
    }
    render() {
        return (
            <div>
                <h1> My class Todo List</h1>
                <form >
                    <input name='title' value={this.state.title} Onchange= {this.handleChange}/>
                    <input name='description' 
                    value={this.state.description}
                    Onchange= {this.handleChange}
                    />
                </form>
            </div>
        )
    }
}

export default TodoClass; 