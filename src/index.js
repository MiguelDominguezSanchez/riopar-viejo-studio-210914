import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './styles/style.css'
import JSON from './db.json'

import Header from './components/header'
import DepartmentList from './components/departments_list'

class App extends Component {
	state = {
		departments: JSON,
	}

	render() {
		console.log(this.state.departments)
		return (
			<>
				<Header />
				<DepartmentList departments={this.state.departments} />
			</>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'))
