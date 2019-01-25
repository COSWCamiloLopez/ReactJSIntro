import React from 'react';
import { Todo } from './Todo';

export class TodoList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const listProps = this.props.todoList.map(x =>
            <li>
                <Todo text={x.text}
                priority={x.priority}
                dueDate={x.dueDate.getDate().toString() + "/" + x.dueDate.getMonth().toString() + "/" + x.dueDate.getFullYear().toString()} />
            </li>);
        return (<ul>
            {listProps}
        </ul>);
    }

}