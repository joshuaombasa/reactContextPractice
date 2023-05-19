import React from 'react'
import './App.css'
import Header from './Header'
import { UserContextConsumer } from "./userContext"

class App extends React.Component {

  state = {
    inputData: ""
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState(
      { [name]: value }
    )
  }

  render() {
    console.log(this.state.inputData)
    return (
      <div className='container'>
        <UserContextConsumer>
          {({ username, upadteUsername }) => <Header username={username} />}
        </UserContextConsumer>

        <main className="main--container">
          <input type="text"
            className="name--input"
            placeholder='Enter full name'
            value={this.state.inputData}
            name="inputData"
            onChange={this.handleChange}
          />
          <UserContextConsumer>
            {({ username, upadteUsername }) => (
              <button
                className="update--name--btn"
                onClick={() => { upadteUsername(this.state.inputData) }}
              >Update name</button>
            )}
          </UserContextConsumer>
        </main>
      </div>
    )
  }


}

export default App
