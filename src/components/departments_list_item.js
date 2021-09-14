import React from 'react'

const DepartmentsItem = ({ item }) => {
	return (
		<div className='department_item'>
			<h3>{item.title}</h3>
			<div>{item.feed}</div>
		</div>
	)
}

export default DepartmentsItem
