import React, { Component } from 'react';
import DayGoalAdd from './dayGoalAdd';
import DayTodo from './dayTodo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'


class DayTodoList extends Component {
    handleAdd = dayTodo => {
        this.props.onAdd(dayTodo);
    }; 

    handleDelete = dailyGoalName => {
        this.props.onDelete(dailyGoalName)
    };

    handleFinish = event => {
        this.props.onFinish(event)
    };

    onClick = () => {
        this.props.handleMonthTodoClick("dayTodoList-hidden");
    }

    render() {
        const MonthTodoClicked = this.props.MonthTodoClicked;
        const ClikedMonth_month = this.props.ClikedMonth_month;
        
        return (
            <>
            <ul className={MonthTodoClicked} >
                <button 
                    className="day-todo-close"
                    onClick={this.onClick}>
                    <FontAwesomeIcon icon={faAngleLeft} />
                </button>
                
                <div className="day-todo-month"><h1>{ClikedMonth_month}</h1></div>
                <div className="day-todo-month-goal">Daily To Do List</div>
                <DayGoalAdd onAdd={this.handleAdd}/>

                {this.props.dayTodoList.map(dayTodo => (
                    <DayTodo 
                    key={dayTodo.id} 
                    onDelete={this.handleDelete}
                    onDelete_={this.handleDelete_}
                    onFinish={this.handleFinish}
                    dayTodo={dayTodo}
                    />
                ))}
            </ul>
            </>
        );
    }
}

export default DayTodoList;