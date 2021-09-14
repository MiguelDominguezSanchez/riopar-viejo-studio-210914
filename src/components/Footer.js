import React, { Component } from 'react'

class Footer extends Component {
	render() {
		return (
			<footer>
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
