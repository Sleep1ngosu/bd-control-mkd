import React, { useState } from 'react'
import { connect } from 'react-redux'
import './AddObject.scss'
import ObjectTypes from './components/ObjectTypes/ObjectTypes'
import Button from './components/Button/Button'
import Field from './components/Field/Field'
// import Header from '../Header/Header'
import arrays from '../../../variables/arrays'
import { setObject, clearObject } from '../../../actions/objects'

function AddObject(props) {
	let [active, setActive] = useState(0)

	const onClickType = (index) => {
		setActive(index)
	}

	// let type

	// if (active === 0) {
	// 	type = 'building'
	// } else if (active === 1) {
	// 	type = 'room'
	// }

	let initialData = {
		cad_num: '',
		address: '',
		square: '',
		purpose: '',
		input_date: '',
		stages: '',
	}

	let [data, setData] = useState({
		cad_num: '',
		address: '',
		square: '',
		purpose: '',
		input_date: '',
		stages: '',
	})

	const onChange = (e) => {
		setData({ ...data, [e.target.name]: e.target.value })
	}

	const onSubmit = (e) => {
		e.preventDefault()
		props.setObject(data)
	}

	const onCancel = () => {
		props.clearObject()
		setData(initialData)
	}

	const objectTypesList = arrays.addObject.titles.text.map((value, index) => {
		return (
			<ObjectTypes
				key={`addObject__objectTypes__${index}`}
				text={value}
				width={arrays.addObject.titles.width[index]}
				index={index}
				onClick={() => onClickType(index)}
				active={active}
			/>
		)
	})

	return (
		<form onSubmit={(e) => onSubmit(e)} className="addObject__wrapper">
			<div className="header">
				<div className="header__title">
					<span className="header__title__text">{props.title}</span>
				</div>
				<div className="header__subtitle">
					{objectTypesList}
					<Button
						type="submit"
						text="сохранить"
						color="#6D5BD0"
						isPush={true}
					/>
					<Button
						onClick={onCancel}
						type="button"
						text="отменить"
						color="#D30000"
					/>
				</div>
			</div>
			<Field
				onChange={(e) => onChange(e)}
				data={data}
				setData={setData}
				title="введите данные"
			/>
		</form>
	)
}

export default connect(null, { setObject, clearObject })(AddObject)
