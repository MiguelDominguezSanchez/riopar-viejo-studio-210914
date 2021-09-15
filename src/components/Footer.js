import React, { Component } from 'react'

class Footer extends Component {
	state = {
		active: false,
	}

	inputChangeHandler = (event) => {
		const value = event.target.value === '' ? false : true

		this.setState({ active: value })
	}

	render() {
		return (
			<footer
				style={{ background: `${this.state.active ? 'red' : 'blue'}` }}
				onClick={this.inputChangeHandler}
			>
				<div>
					<div>
						<br />
					</div>
					<h4 className='footer-caption'>{this.props.footerText}</h4>
				</div>
			</footer>
		)
	}
}

export default Footer

// <header style={{ background: `${this.state.active ? 'red' : 'blue'}` }}>
