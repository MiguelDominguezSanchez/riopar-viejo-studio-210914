import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './styles/style.css'
import JSON from './db.json'

import Header from './components/header'
import DepartmentList from './components/departments_list'
import Footer from './components/Footer'

class App extends Component {
	state = {
		departments: JSON,
		filtered: JSON,
		footerText: 'Riopar Studio',
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
				<DepartmentList departments={filtered}>
					<h1>I am a children</h1>
				</DepartmentList>
				<Footer footerText={footerText} />
			</>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'))
