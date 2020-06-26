import React from 'react';
import './App.css';
import SearchMovie from "./SearchMovie"


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <table className="heading">
          <tbody>
            <tr>
              <td>
                <img alt="app icon" width="45" src="logo.png"></img>
              </td>
              <td width="15"></td>
              <td>
                <h1>Movies App</h1>
              </td>
            </tr>
          </tbody>
        </table>
        <SearchMovie />
      </div>
    );
  }
}
export default App;
