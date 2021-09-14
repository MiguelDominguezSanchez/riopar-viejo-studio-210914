import React from 'react'

const DepartmentList = (props) => {
	const departments = props.departments.map((item) => (
		<div key={item.id}>
			<h3>{item.title}</h3>
			<div>{item.feed}</div>
		</div>
	))
	return <>{departments}</>
}

export default DepartmentList
