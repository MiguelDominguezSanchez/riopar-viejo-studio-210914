import React, { Component } from 'react'
import logo from '../img/castle.svg'

class Header extends Component {
	inputChangeHandler(event) {
		console.log(event.target.value)
	}

	render() {
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
			</header>
		)
	}
}

export default Header
