import React, { Component } from 'react'
import logo from '../img/castle.svg'

class Header extends Component {
	render() {
		return (
			<header>
				<div>
					<a href='#'>
						<img src={logo} className='App-logo' alt='logo' />
					</a>

					<h1 className='logo'>
						Riopar <br /> Studio
					</h1>
				</div>
				<input />
			</header>
		)
	}
}

export default Header
