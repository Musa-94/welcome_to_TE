// ФАЙЛ ДЛЯ РЕДАКТИРОВАНИЯ И ТЕСТИРОВАНИЯ КОМПОНЕНТОВ ИЗ ТЕСТОВОГО ЗАДАНИЯ

import React, { Component, PureComponent } from "react";
import { IUser, IProps } from "./interface";

export const FirstComponent = React.memo(({ name, age }: IUser) => {
    console.log("FirstComponent has been updated");

    return (
        <div>
            my name is {name}, my age is {age}
        </div>
    );
});

// Нужен потому-что вложенная проверка, сделал по простому, потому-то явные 2 пропсы,
// если большая вложенность есть специальные либы которые это быстрее делают за счёт алгоритмов
const areEqual = (prevProps, nextProps) => {
    return (
        prevProps.user.name === nextProps.user.name &&
        prevProps.user.age === nextProps.user.age
    );
};

export const SecondComponent = React.memo(({ user: { name, age } }: IProps) => {
    console.log("SecondComponent has been updated");

    return (
        <div>
            my name is {name}, my age is {age}
        </div>
    );
}, areEqual);

export class ThirdComponent extends PureComponent<IUser> {
    render() {
        console.log("ThirdComponent has been updated");

        return (
            <div>
                my name is {this.props.name}, my age is {this.props.age}
            </div>
        );
    }
}

// Нужен потому-что вложенная проверка
export class FourthComponent extends Component<IProps> {
    shouldComponentUpdate(nextProps) {
        const {
            user: { name, age }
        } = this.props;

        return nextProps.user.name !== name && nextProps.user.age !== age;
    }

    render() {
        console.log("FourthComponent has been updated");

        return (
            <div>
                my name is {this.props.user.name}, my age is {this.props.user.age}
            </div>
        );
    }
}
