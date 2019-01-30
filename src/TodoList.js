import React from 'react';
import {Todo} from './Todo';

/**
 *
 */
export class TodoList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const listProps = this.props.todos.map((x) => {
                return (
                    <Todo text={x.text}
                          priority={x.priority}
                          dueDate={x.dueDate}/>
                );
            }
            )
        ;

        return (<ul>
            {listProps}
        </ul>);
    }

}