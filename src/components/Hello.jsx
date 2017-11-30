import React from 'react'

export default class Hello extends React.Component {

  constructor (props) {
    super(props)
    this.increment = this.increment.bind(this)
    this.state = {
      counter: 20
    }
  }

  render () {
    return <div>
      Salut {this.props.name}<br/>
      Compteur : {this.state.counter}<br/>
      {this.state.counter >= 10 && <div>Bravo vous avez dépassé 10</div>}
      <button onClick={this.increment}>Incrémenter</button>
      </div>
  }

  increment () {
    this.setState({counter: this.state.counter + 1})
  }

}