import React, { Component } from 'react'
import logo from '../img/castle.svg'

class Header extends Component {
	state = {
		active: 'active',
		keywords: '',
	}

	inputChangeHandler = (event) => {
		const value = event.target.value === '' ? 'active' : 'not-active'
		this.setState({
			active: value,
			keywords: event.target.value,
		})
	}

	render() {
		// console.log(this.state)

		return (
			// <header style={{ background: `${this.state.active ? 'red' : 'blue'}` }}>
			<header className={this.state.active}>
				<div>
					<a href='index.html'>
						<img src={logo} className='App-logo' alt='logo' />
						<h1 className='logo'>
							Riopar <br /> Studio
						</h1>
					</a>
				</div>
				<input onChange={this.inputChangeHandler} />
			</header>
		)
	}
}

export default Header
