import React from 'react'
import './Input.scss'

function Input(props) {
	return (
		<div className="addObject__inputBlock__wrapper">
			<div className="addObject__inputBlock__label">
				<label className="addObject__inputBlock__label__text">
					{props.label}
				</label>
			</div>
			<input
				onChange={(e) => props.onChange(e)}
				value={props.value}
				name={props.name}
				type="text"
				className="addObject__inputBlock__input"
			></input>
		</div>
	)
}

export default Input
