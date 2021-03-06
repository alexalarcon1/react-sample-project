import React, { Component } from 'react';
import TodoItem from './TodoItem'

class Todos extends Component {
	render() {
		let todoItems;
		if(this.props.todos){
			todoItems = this.props.todos.map(todo => {
				return (
					<TodoItem key={todo.title} todo={todo} />
				);
			});
		}
	    return (
	      <div className="Todos">
					<h3>Todos</h3>
	      		{todoItems}
	      </div>
	    );
	  }
	}

	//Validate the property type is correct
	Todos.propTypes = {
		todos: React.PropTypes.array
	}

	export default Todos;
