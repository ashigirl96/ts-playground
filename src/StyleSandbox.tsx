import React from "react";
import classNames from "classnames";
import "./styled.scss";

export const StyleSandbox  = () => {
  return (
    <>
      <a href={""} className={classNames("link", "btn")}>Inline Block Button</a>
      <a href={""} className={"link btn-block"}>Block Button</a>
      <div className={"font"}>Hello, world</div>
      <div>Hello, world</div>
      <span className={"before-content"}>New Books</span>
      <p className={"under-line"}>Event</p>
      <div className={"parent"}>
        <p className={"background-orange"}>要素1</p>
        <p className={"absolute-position background-blue"}>要素2</p>
      </div>

      {/*<h1>こんにちは</h1>*/}
      <h1 className={"center"}>こんにちは</h1>
      <h2 className={"center"}>こんにちは</h2>

      <div className={"links"}>
        <a href={""} className={"red"}>Story</a>
        <a href={""} className={"blue"}>Character</a>
        <a href={""} className={"red"}>Cast/Staff</a>
        <a href={""} className={"blue"}>News</a>
      </div>

      <div className={"map"}>
        <span className={"detail text1"}>Text1</span>
        <span className={"detail text2"}>Text2</span>
        <span id={"map"}>Box</span>
      </div>
    </>
  );
};
