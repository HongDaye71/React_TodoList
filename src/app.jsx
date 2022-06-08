import './app.css';
import React, { Component } from 'react';
import MonthTodoList from './Component/monthTodoList';
import DayTodoList from './Component/dayTodoList';

class App extends Component {
  state = {
    monthTodoList: [
      { id: 1, month: "January", count_goal_setting: 0, count_goal_achievement: 0, dayTodoList: [],},
      { id: 2, month: "Febuary", count_goal_setting: 0, count_goal_achievement: 0, dayTodoList: [],},
      { id: 3, month: "March", count_goal_setting: 0, count_goal_achievement: 0, dayTodoList: [],},
      { id: 4, month: "April", count_goal_setting: 0, count_goal_achievement: 0, dayTodoList: [],},
      { id: 5, month: "May", count_goal_setting: 0, count_goal_achievement: 0, dayTodoList: [],},
      { id: 6, month: "June", count_goal_setting: 0, count_goal_achievement: 0, dayTodoList: [],},
      { id: 7, month: "July", count_goal_setting: 0, count_goal_achievement: 0, dayTodoList: [],},
      { id: 8, month: "August", count_goal_setting: 0, count_goal_achievement: 0, dayTodoList: [],},
      { id: 9, month: "September", count_goal_setting: 0, count_goal_achievement: 0, dayTodoList: [],},
      { id: 10, month: "October", count_goal_setting: 0, count_goal_achievement: 0, dayTodoList: [],},
      { id: 11, month: "November", count_goal_setting: 0, count_goal_achievement: 0, dayTodoList: [],},
      { id: 12, month: "December", count_goal_setting: 0, count_goal_achievement: 0, dayTodoList: [],},
    ],
    
    dayTodoList: [],

    MonthTodoClicked: "dayTodoList-hidden",
    ClikedMonth_id: 0,
    ClikedMonth_month: "Month"
  };

  handleAdd = dailyGoalName => {
    const dayTodoList = [...this.state.dayTodoList, {id:Date.now(), dailyGoalName}];
    this.setState({ dayTodoList });
    let items = [...this.state.monthTodoList];
    let item = {...items[this.state.ClikedMonth_id -1]};
    item.dayTodoList = dayTodoList;
    item.count_goal_setting += 1;
    items[this.state.ClikedMonth_id -1] = item;
    this.setState({ monthTodoList : items});
    /*
    입력된 dailyGoalName을 기반으로 dayTodoList state재정의
    1. spread operator(...)를 통해 dailyGoal변수에 dailyGoalName복사
      -> {오브젝트 id설정 / dailyGoalName설정(변수명이 동일할 경우, 중복작성 생략가능)} 
    2. state update

    how to update state.item[1] in state: 
    https://stackoverflow.com/questions/29537299/react-how-to-update-state-item1-in-state-using-setstate
    */
  };

  handleDelete = dayTodo => {
    const dayTodoList = this.state.dayTodoList.filter(item => item.id !== dayTodo.id);
    this.setState({ dayTodoList });

    let items = [...this.state.monthTodoList];
    let item = {...items[this.state.ClikedMonth_id -1]};
    item.dayTodoList = dayTodoList;
    item.count_goal_setting -= 1;
    items[this.state.ClikedMonth_id -1] = item;
    this.setState({ monthTodoList : items});
  }

  handleFinish = (event) => {
    let items = [...this.state.monthTodoList];
    let item = {...items[this.state.ClikedMonth_id -1]};

    item.count_goal_achievement  = event === "day-goal-name-noFinished"  ? item.count_goal_achievement -= 1 : item.count_goal_achievement += 1;

    items[this.state.ClikedMonth_id -1] = item;
    this.setState({ monthTodoList : items});
  }

  handleMonthTodoClick = () => {
    const status_MonthTodoClicked = this.state.MonthTodoClicked;
    this.state.MonthTodoClicked = status_MonthTodoClicked === "dayTodoList-hidden" ? "dayTodoList-visible" : "dayTodoList-hidden"
    this.setState({ MonthTodoClicked : this.state.MonthTodoClicked });
  }

  handleClikedMonth_id = (event) => {
    this.setState({ ClikedMonth_id : event });
    this.setState({ dayTodoList :  this.state.monthTodoList[event - 1].dayTodoList})
  }

  handleClikedMonth_month = (event) => {
    this.setState({ ClikedMonth_month : event });
  }

  render() {
    return (
      <>
        <div className="background">
            <div className="background-main">
              <h1>To do list</h1>
              <MonthTodoList 
                monthTodoList={this.state.monthTodoList}
                handleMonthTodoClick={this.handleMonthTodoClick}
                handleClikedMonth_id={this.handleClikedMonth_id}
                handleClikedMonth_month={this.handleClikedMonth_month}
                />
              <DayTodoList
                MonthTodoClicked={this.state.MonthTodoClicked}
                handleMonthTodoClick={this.handleMonthTodoClick}
                ClikedMonth_month={this.state.ClikedMonth_month}
                dayTodoList={this.state.dayTodoList}
                onDelete={this.handleDelete}
                onAdd={this.handleAdd}
                onFinish={this.handleFinish}
               />
            </div>
        </div>
      </>
    );
  }
}

export default App;

