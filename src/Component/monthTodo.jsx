import React, { Component } from 'react';
import MonthGoalAdd from './monthGoalAdd';

class MonthTodo extends Component {
    state = {
        onClicked: "monthTodo-noClicked",
    }

    onClick = event  => {
        const status_onClicked = this.state.onClicked;
        this.state.onClicked = status_onClicked === "monthTodo-noClicked" ? "monthTodo-Clicked" : "monthTodo-noClicked";
        this.setState({ onClicked : this.state.onClicked });
        this.props.handleMonthTodoClick(this.state.onClicked);
        this.props.handleClikedMonth_id(this.props.monthTodo.id);
        this.props.handleClikedMonth_month(this.props.monthTodo.month);
    };

    render() {
        const {month, count_goal_setting, count_goal_achievement} = this.props.monthTodo;
        return (
            <>
            <li className={"monthTodo" + " " + this.state.onClicked}>
                <div className="colider" onClick={this.onClick}>
                <div className="month"><h2>{`${month}`}</h2></div>
                <div className="report"><span>Report</span></div>
                <div className="count">
                    {`Goal Completions ${count_goal_achievement}/${count_goal_setting}`}
                </div>
                </div>
                <MonthGoalAdd />
            </li>
            </>
        );
    }
}

export default MonthTodo;

{/*
props
정의: state와 다르게 컴포넌트 밖에서 주어지는 데이터로, 외부에서 데이터를 제공받는다.

사용법(해당 스크립트 기준): 부모 컴포넌트(App.jsx)에서 자식 컴포넌트(MonthTodo)로 인자를 전달해주면, 전달된 인자들이 오브젝트로 묶어져서 MonthTodo 컴포넌트 안에서 this.props으로 할당되어 진다.

예시: 
[App.jsx]
class App extends Component {
  state = {
    month: 1,
  };

  render() {
    return (
        <MonthTodo month={this.state.month}/>
    );
  }
}
export default App;

[MonthTodo]
class MonthTodo extends Component {
 
    render() {
        console.log(this.props);
        return (
            <div>
            </div>
        );
        }
    }
export default MonthTodo;

======================================================================================================

Props -> 배열 내 오브젝트의 특정 key값에 접근하는 법
예시: this.props.monthTodo[0].month
    -> HabitTracker Project의 const {name, count} = this.props.habit;는 동작했던 이유: map을 통해 개별 오브젝트를 하나씩 할 당해 주었기 때문

======================================================================================================

etc.
JSX: JavaScript를 확장한 문법
[]: 배열표시
{}: JS에서 객체(오브젝트)를 생성하고자 할 때에는 중괄호 안에 key와 value값을 작성한다. 이는 리액트에서도 동일하며 JS값을 JSX내부에서 사용할 때에는 중괄호로 감싸주어야 한다.

*/}