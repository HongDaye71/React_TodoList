import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

class DayTodo extends Component {
    state = {
        goalStatus: "day-goal-name-noFinished",
    }

    handleFinish = () => {
        this.state.goalStatus = this.state.goalStatus === "day-goal-name-noFinished"  ? "day-goal-name-Finished" : "day-goal-name-noFinished";
        this.setState({ onSubmitted : this.state.onSubmitted });
        this.props.onFinish(this.state.goalStatus);
        //props로 전달받은 onFinish함수에 값 전달
    }

    handleDelete = () => {
        this.props.onDelete(this.props.dayTodo)
    }

    render() {
        const {dailyGoalName} = this.props.dayTodo;

        return (
            <>
            <li className='dayTodo'>
                <span className={"day-goal-name" + " " + this.state.goalStatus}>{dailyGoalName}</span>
                <button 
                    className="day-goal-checkbox"
                    onClick={this.handleFinish}
                    >
                    <FontAwesomeIcon icon={faCheck} />
                </button>
                <button 
                    className="day-goal-delete"
                    onClick={this.handleDelete}
                    >
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </li>
            </>
        );
    }
}

export default DayTodo;