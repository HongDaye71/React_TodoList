import React, { Component } from 'react';

class MonthGoalAdd extends Component {
    inputRef = React.createRef();

    state = {
        onSubmitted : "month-goal-input-noSubmitted"
    }

    onSubmit = event => {
        event.preventDefault();
        //월 목표 설정 시, className동적변경 (목표 설정 시,input box의 색상변경을 위함)
        const goalName = this.inputRef.current.value;
        this.state.onSubmitted = goalName ? "month-goal-input-Submitted" : "month-goal-input-noSubmitted";
        this.setState({ onSubmitted : this.state.onSubmitted });
    };

    render() {
        return (
            <form className="month-goal-form" onSubmit={this.onSubmit}>
                <input 
                    ref={this.inputRef} 
                    type="text"
                    className={"month-goal-input" + " " + this.state.onSubmitted}
                    placeholder="Please enter your montly goal"/>
            </form>
        );
    }
}

export default MonthGoalAdd;

/*
form tag: 정보제출을 위한 문서구획을 나타냄
onSubmit: form tag내부에서 Submit으로 인해 발생하는 이벤트 처리

======================================================================================================

React.createRef: 
React에서 다른 요소에 접근하고자 할 때 사용
-> inputRef를 선언한 뒤에 input안에서 이를 호출하는 경우, 컴포넌트가 브라우저에 표기될 때 input요소가 inputRef와 연결되어진다. 따라서 요소에 접근 후 해당하는 데이터를 읽어올 수 있게 된다.
*/