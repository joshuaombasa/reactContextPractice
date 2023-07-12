import React from "react";

const {Provider, Consumer} = React.createContext()

class UserContextProvider extends React.Component {

    state = {
        username: "Diamond Trust Bank Limited"
    }

    updateUsername = (inputData) => {
        this.setState(
            {username: inputData}
        )
    }

    render() {
        return (
            <Provider 
                value={
                        {
                            username: this.state.username,
                            updateUsername: this.updateUsername
                        }
                      }
            >
                {this.props.children}
            </Provider>
        )
    }
}

export { UserContextProvider, Consumer as UserContextConsumer}