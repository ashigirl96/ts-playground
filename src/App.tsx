import React from "react";
import {StyleSandbox} from "./StyleSandbox";
import styles from "./app.scss";
import classNames from "classnames";

export const App = () => {
  console.log()
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

      <div className={styles.right}>
        <a className={styles.btn}>click!</a>
      </div>
    </>
  );
};
