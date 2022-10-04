// ФАЙЛ С КОРНЕВЫМ КОМПОНЕНТОМ ДЛЯ РЕДАКТИРОВАНИЯ ПОДКЛЮЧАЕМЫХ ТЕСТОВЫХ КОМПОНЕНТОВ

import React, { Fragment, StrictMode } from "react";
import ReactDOM from "react-dom";

import { Block } from "./taskComponents";
import { blocksData } from "./data";

function App() {
    return (
        <Fragment>
            {blocksData.map((data) => (
                <Block
                    key={data.id}
                    imgSrc={data.imgSrc}
                    imgAlt={data.imgAlt}
                    content={data.content}
                    userData={data.userData}
                    showContent={data.showContent}
                    mouseEnterCallback={data.mouseEnterCallback}
                />
            ))}
        </Fragment>
    );
}

ReactDOM.render(
    <StrictMode>
        <App />
    </StrictMode>,
    document.getElementById("root")
);
