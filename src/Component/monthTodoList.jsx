import React, { Component, useState } from 'react';
import DayTodo from './dayTodo';
import MonthTodo from './monthTodo';

class MonthTodoList extends Component {
    handleMonthTodoClick = (event) => {
        this.props.handleMonthTodoClick(event);
    }

    handleClikedMonth_id = (event) => {
        this.props.handleClikedMonth_id(event);
    }

    handleClikedMonth_month = (event) => {
        this.props.handleClikedMonth_month(event);
    }
    
    render() {
        return (
            <>
                <ul className="monthTodoList">
                    {this.props.monthTodoList.map(monthTodo => (
                        <MonthTodo 
                        key={monthTodo.id}
                        monthTodo={monthTodo}
                        handleMonthTodoClick={this.handleMonthTodoClick}
                        handleClikedMonth_id={this.handleClikedMonth_id}
                        handleClikedMonth_month={this.handleClikedMonth_month}
                        />
                    ))}
                </ul>
            </>
        );
    }
}

export default MonthTodoList;

{/*
목록을 나타내는 태그
<ol>: ordered list의 약자로, 순서가 있는 목록을 만드는 데 사용
<ul>: unordered list의 약자로, 순서가 없는 목록을 만든느 데 사용
<li>: list item의 약자로, <ol>과<ul>내부에서 각 항목을 나열할 때 사용

======================================================================================================

1. react-responsive
1-1. useMediaQuery
정의: react-responsive에서 제공하며 디바이스에 따라 웹이나 앱의 스타일을 수정할 때 사용
공식문서: https://developer.mozilla.org/ko/docs/Web/CSS/Media_Queries/Using_media_queries

======================================================================================================

2. 자식에서 부모로 데이터를 전달하는 법
자식은 props를 사용해서 부모에게 데이터를 전달할 수 없다.따라서 props대신 함수를 사용한다.
(1) 부모에서 useState를 통해 전달받을 데이터를 저장할 변수를 선언 후 Proprs로 setter전달
(2) 자식에서는 부모로부터 전달받은 setter를 통해 전달한 데이터를 저장

*/}