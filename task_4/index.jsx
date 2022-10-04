// ФАЙЛ ДЛЯ РЕДАКТИРОВАНИЯ И ТЕСТИРОВАНИЯ КОМПОНЕНТОВ ИЗ ТЕСТОВОГО ЗАДАНИЯ

import { Component, createRef } from "react";

export class MainComponent extends Component {
    myRef = createRef(); // create simple ref

    toggleChildVisibility = () => this.myRef.current.toggleButton(); // method to hide or show child component

    render() {
        return (
            <>
                <button
                    className="btn btn-info btn-lg"
                    onClick={this.toggleChildVisibility}
                >
                    toggle ChildComponent visibility
                </button>

                {/* set ref to controll child component */}
                {/* если посмотреть документацию React, они говорят,
         что с функциями это не будет работать
         https://ru.react.js.org/docs/refs-and-the-dom.html#creating-refs */}
                <ChildComponent ref={this.myRef} />
            </>
        );
    }
}

class ChildComponent extends Component {
    state = { isActive: true };

    toggleButton = () => this.setState({ isActive: !this.state.isActive });

    render() {
        return this.state.isActive ? <div>child component</div> : null;
    }
}
