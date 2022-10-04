// ФАЙЛ ДЛЯ РЕДАКТИРОВАНИЯ И ТЕСТИРОВАНИЯ КОМПОНЕНТОВ ИЗ ТЕСТОВОГО ЗАДАНИЯ

import { useState, Fragment, memo } from "react";

export type IProps = {
    user?: {
        name: string;
        age: number;
    }
};

// первое решение просто делать глубокуюб проверку
// const areEqual = (prev, next) => {
//   return prev.user.name === next.user.name && prev.user.age === next.user.age;
// };

// memoized component
const ChildComponent = memo(({ user: { name, age } }: IProps) => {
    console.log("ChildComponent has been updated. Memoization is not working.");

    return (
        <div>
            user name: {name}, user age: {age || "unknown"}
        </div>
    );
});

// второе решение - вынести в переменную и тем самым ссылка на данный объект будет одна, не будет каждый раз создаваться новый объект
const defaultUser = { name: "unknown", age: null };

export const MainComponent = ({
  user = defaultUser // default value for `props.user`
}: IProps) => {
    const [state, setState] = useState<boolean>(false); // change state for component force updating

    const handleClick = () => {
        setState(!state);
    };

    return (
        <Fragment>
            <button onClick={handleClick} className="btn btn-info">
                MainComponent force updating
            </button>
            <ChildComponent user={user} />
        </Fragment>
    );
};
