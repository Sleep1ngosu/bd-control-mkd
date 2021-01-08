import React, { useState } from 'react'
import './Field.scss'
import DeleteIcon from '../../../../../assets/svg/icons/DeleteIcon'
import Input from '../Input/Input'
import arrays from '../../../../../variables/arrays'
import consts from '../../../../../variables/consts'

function Field(props) {
	let [deleteIcon, setDeleteIcon] = useState(
		<DeleteIcon color={consts.unhoveredIconColor} />
	)

	const deleteIconHover = () => {
		setDeleteIcon(<DeleteIcon color={consts.hoveredIconColor} />)
	}

	const deleteIconUnhover = () => {
		setDeleteIcon(<DeleteIcon color={consts.unhoveredIconColor} />)
	}

	const inputList = arrays.labels.structure.map((value, index) => {
		return (
			<Input
				key={`addObject__field__input__${index}`}
				label={value}
				onChange={(e) => props.onChange(e)}
				name={arrays.labels.names[index]}
				value={props.data[arrays.labels.names[index]]}
			/>
		)
	})
	return (
		<div className="addObject__field">
			<div className="addObject__field__header">
				<div
					onMouseEnter={deleteIconHover}
					onMouseLeave={deleteIconUnhover}
				>
					{deleteIcon}
				</div>
			</div>
			<div className="addObject__field__title">
				<span className="addObject__field__title__text">
					{props.title}
				</span>
			</div>
			{inputList}
			<div className="addObject__field__footer"></div>
		</div>
	)
}

export default Field
