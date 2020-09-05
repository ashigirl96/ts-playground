import React from "react";
import {StyleSandbox} from "./StyleSandbox";
import styles from "./app.scss";
import classNames from "classnames";

export const Trash = () => {
  return (
    <>
      {/*<StyleSandbox/>*/}
      <nav className={styles.globalNav}>
        <ul>
          <li className={styles.navItem}><a> HOME </a></li>
          <li className={styles.navItem}><a> NEWS </a></li>
          <li className={styles.navItem}><a> ABOUT </a></li>
          <li className={styles.navItem}><a> TOPICS</a></li>
          <li className={styles.navItem}><a> DOCS </a></li>
        </ul>
      </nav>
      <div className={classNames(styles.text, styles.red)}>
        Hello, world!
      </div>

      <div className={styles.text}>
        <div className={styles.blue}>
          Hello,
        </div>
        world
      </div>

      <div className={classNames(styles.text, styles.textGreen)}>Hello,</div>

      <div className={styles.flex}>
        <a className={classNames(styles.btn, styles.left)}>click!</a>
        <a className={classNames(styles.btn, styles.right)}>click!</a>
      </div>

      <div className={classNames(styles.box)}>
        <div>One</div>
        <div>Two</div>
        <div>Three</div>
        <div className={styles.push}>Four</div>
        <div>Five</div>
      </div>

      <div className={styles.scroll}>
        あいうえおかきくけこ
      </div>

      <div className={styles.parent}>
        <div className={styles.parent01}>
          左
        </div>
        <div className={styles.parent02}>
          右
        </div>
      </div>

      <div className={styles.scroll}>
        <div>ほげ</div>
        <div>ほげ</div>
        <div>ほげ</div>
        <div>ほげ</div>
        <div>ほげ</div>
        <div>ほげ</div>
        <div>ほげ</div>
        <div>ほげ</div>
        <div>ほげ</div>
        <div>ほげ</div>
      </div>
    </>
  );
};
