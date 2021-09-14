import React from 'react'
import DepartmentItem from './departments_list_item'

const DepartmentList = (props) => {
	;<DepartmentList />
	const departments = props.departments.map((item) => (
		<DepartmentItem item={item} key={item.id} />
	))
	return <>{departments}</>
}

export default DepartmentList
