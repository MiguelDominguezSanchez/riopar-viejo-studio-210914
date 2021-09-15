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
		footerText: 'Riopar Studio',
	}

	render() {
		const { departments, footerText } = this.state
		return (
			<>
				<Header />
				<DepartmentList departments={departments}>
					<h1>I am a children</h1>
				</DepartmentList>
				<Footer footerText={footerText} />
			</>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'))
