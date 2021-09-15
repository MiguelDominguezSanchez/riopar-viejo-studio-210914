import React from 'react'
import DepartmentItem from './departments_list_item'

const DepartmentList = (props) => {
	const departments = props.departments.map((item) => (
		<DepartmentItem item={item} key={item.id} />
	))
	return (
		<>
			{departments}
			{props.children}
		</>
	)
}

export default DepartmentList
