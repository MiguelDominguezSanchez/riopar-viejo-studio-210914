import React, { Component } from 'react'
import logo from '../img/castle.svg'

class Header extends Component {
	state = {
		name: 'Francis',
		title: 'The keywords are:',
		keywords: '',
		count: 0,
	}

	inputChangeHandler = (event) => {
		this.setState({
			keywords: event.target.value,
		})
	}

	addOne() {
		this.setState((state, props) => ({
			count: state.count + 1,
		}))
	}

	render() {
		console.log(this.state)

		return (
			<header>
				<div>
					<a href='index.html'>
						<img src={logo} className='App-logo' alt='logo' />
						<h1 className='logo'>
							Riopar <br /> Studio
						</h1>
					</a>
				</div>
				<input onChange={this.inputChangeHandler} />
				<div>{this.state.title}</div>
				<div>{this.state.keywords}</div>

				<br />

				<div>{this.state.count}</div>
				<button onClick={() => this.addOne()}>Add one</button>
			</header>
		)
	}
}

export default Header
