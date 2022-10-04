// ФАЙЛ ДЛЯ РЕДАКТИРОВАНИЯ И ТЕСТИРОВАНИЯ КОМПОНЕНТОВ ИЗ ТЕСТОВОГО ЗАДАНИЯ

import React, { useState } from "react";
import constants from "./constants";

const getContent = (showContent, data) => {
  switch (showContent) {
    case constants.CONTENT:
      return <p>{data.content}</p>;
    case constants.IMAGE:
      return <img src={data.imgSrc} alt={data.imgAlt} />;
    case constants.ADDRESS:
      return (
          <address>
            country: {data.userData.country}, street: {data.userData.street}
          </address>
      );
    default:
      return null;
  }
};

export const Block = ({
  mouseEnterCallback,
  showContent,
  userData,
  content,
  imgSrc,
  imgAlt
}) => {
  const [isActive, setActive] = useState(false);

  const mouseEnterHandler = () => {
    setActive(true);
    mouseEnterCallback();
  };

  const mouseLeaveHandler = () => {
    setActive(false);
  };

  const data = {
    userData,
    content,
    imgSrc,
    imgAlt
  };

  return (
    <div
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      className={isActive ? "active" : ""}
    >
      {getContent(showContent, data)}
    </div>
  );
};
