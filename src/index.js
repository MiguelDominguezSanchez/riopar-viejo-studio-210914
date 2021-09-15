import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './styles/style.css'
import JSON from './db.json'

import Header from './components/header'
import DepartmentList from './components/departments_list'
import Footer from './components/Footer'
import Life from './components/lifecycle'

class App extends Component {
	state = {
		departments: JSON,
		filtered: JSON,
		footerText: 'Riopar Studio',
		active: true,
	}

	getKeywords = (event) => {
		let keywords = event.target.value
		let filtered = this.state.departments.filter((item) => {
			return item.title.indexOf(keywords) > -1
		})

		this.setState({
			filtered,
		})
	}

	render() {
		const { departments, footerText, filtered } = this.state
		return (
			<>
				<Header keywords={this.getKeywords} />
				{/* <DepartmentList departments={filtered}>
					<h1>I am a children</h1>
				</DepartmentList> */}

				{this.state.active ? <Life /> : null}

				<button onClick={() => this.setState({ active: !this.state.active })}>
					Action
				</button>

				<Footer footerText={footerText} />
			</>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'))
