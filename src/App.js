import "./index.css";
import styles from "./App.module.scss";
import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import MainPage from "./pages/MainPage/mainPage";
import TodoPage from "./pages/TodoPage/todoPage";
function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <nav className={styles.appNav}>
          <ul className={styles.appUl}>
            <li>
              <Link className={styles.appLink} to="/">HOME</Link>
            </li>
            <li>
              <Link className={styles.appLink} to="/todo-list">TODOLIST</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/todo-list" component={TodoPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
