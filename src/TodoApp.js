import React from 'react';
import {TodoList} from './TodoList';

export class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            text: '',
            priority: '',
            dueDate: ''
        };
        this.handleChangeText = this.handleChangeText.bind(this);
        this.handleChangePriority = this.handleChangePriority.bind(this);
        this.handleChangeDueDate = this.handleChangeDueDate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <div>
                <h3>TODO</h3>
                <form onSubmit={this.handleSubmit}
                      className="form-horizontal">
                    <input
                        id="todo-text"
                        onChange={this.handleChangeText}
                        value={this.state.text}
                        placeholder="Text"
                        type="text"
                        className="form-control"
                    />
                    <input
                        id="todo-priority"
                        onChange={this.handleChangePriority}
                        value={this.state.priority}
                        placeholder="Priority"
                        className="form-control"
                        type="number"
                    />
                    <input
                        id="todo-dueDate"
                        onChange={this.handleChangeDueDate}
                        value={this.state.dueDate}
                        className="form-control"
                        type="date"
                    />
                    <button className="btn btn-light">
                        Add #{this.state.items.length + 1}
                    </button>
                    <TodoList todos={this.state.items}/>
                </form>
            </div>
        );
    }

    handleChangeText(e) {
        this.setState({text: e.target.value});
    }

    handleChangePriority(e){
        this.setState({priority: e.target.value})
    }

    handleChangeDueDate(e){
        this.setState({dueDate: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault(); //Evita que la pagina web se recargue
        if (!this.state.text.length) {
            return;
        }
        const newItem = {
            text: this.state.text,
            id: Date.now(),
            priority: this.state.priority,
            dueDate: this.state.dueDate
        };
        this.setState(prevState => ({
            items: prevState.items.concat(newItem),
            text: '',
            priority: '',
            dueDate: ''
        }));
    }
}