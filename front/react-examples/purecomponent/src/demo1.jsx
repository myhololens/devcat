import React, { Component } from 'react'
import { render } from 'react-dom'
import './demo.less'
class App extends Component {
    constructor() {
        super()
        this.state = { messages: [] }
    }

    _getLastMessage() {
        const lastMessage = this.state.messages[this.state.messages.length - 1]
        return lastMessage == undefined ? '' : lastMessage
    }

    _onMessageChange(event) {
        const messages = [...this.state.messages]
        messages.push(event.target.value)
        this.setState({ messages })

        // this.state.messages.push(event.target.value)
        // this.setState({ messages:this.state.messages })
    }

    render() {
        return (
            <div className="App">
                <input type="text"
                    value={this._getLastMessage()}
                    onChange={this._onMessageChange.bind(this)} />
                <MessageList messages={this.state.messages} />
            </div>
        )
    }
}

class MessageList extends Component {
    render() {
        return (
            <ul>
                {this.props.messages.map((message, index) => <Message message={message} key={index}/>)}
            </ul>
        )
    }
}

class Message extends Component {
    render() {
        return <li style={{ margin: '10px' }}>{this.props.message}</li>
    }
}

render(
    <App />,
    document.querySelector('#app')
)
