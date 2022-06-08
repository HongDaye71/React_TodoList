import React, { Component } from 'react';

class DayGoalAdd extends Component {
    inputRef = React.createRef();

    onSubmit = (event) => {
        event.preventDefault();
        const dailyGoalName = this.inputRef.current.value;
        dailyGoalName && this.props.onAdd(dailyGoalName);
        this.inputRef.current.value = '';
    }

    render() {
        return (
            <form className="day-goal-form" onSubmit={this.onSubmit}>
                <input 
                    ref={this.inputRef}
                    type="text"
                    className="day-goal-input"
                    placeholder="Please enter your daily to do list"/>
            </form>
        );
    }
}

export default DayGoalAdd;