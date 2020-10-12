/*
 * @Description:
 * @Author: FlyingRedPig
 * @Date: 2020-09-22 11:51:16
 * @LastEditors: FlyingRedPig
 * @LastEditTime: 2020-09-22 11:53:21
 * @FilePath: \react2\vidly\src\App.js
 */
import React, { Component } from 'react';
import './App.css';
import Movies from './components/movies';

class App extends Component {
  state = {};
  render() {
    return (
      <main className="container">
        <Movies />
      </main>
    );
  }
}

export default App;
