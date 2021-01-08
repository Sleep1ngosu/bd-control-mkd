import React, { useState } from 'react'
import { connect } from 'react-redux'
import './Building.scss'
import ObjectTypes from '../AddObject/components/ObjectTypes/ObjectTypes'
import BuildingTitle from './BuildingTitles/BuildingTitle'
import Info from './Info/Info'
import MapIcon from '../../../assets/svg/icons/MapIcon'
import DocumentIcon from '../../../assets/svg/icons/DocumentIcon'
import ClipboardIcon from '../../../assets/svg/icons/ClipboardIcon'
import SearchIcon from '../../../assets/svg/icons/SearchIcon'
import FilterIcon from '../../../assets/svg/icons/FilterIcon'
import RefreshIcon from '../../../assets/svg/icons/RefreshIcon'
import HoveredIcon from '../../../HOCs/HoveredIcon'
import CalendarIcon from '../../../assets/svg/icons/CalendarIcon'
import PeopleIcon from '../../../assets/svg/icons/PeopleIcon'
import CheckboxIcon from '../../../assets/svg/icons/CheckBoxIcon'
// import CheckboxIconActive from '../../../assets/svg/icons/CheckBoxActiveIcon'
import BuildingBlock from './BuildingBlock/BuildingBlock'
import MembersList from './MembersList/MembersList'
import Registers from './Registers/Registers'
import consts from '../../../variables/consts'
import arrays from '../../../variables/arrays'
import * as actionTypes from '../../../actions/actions'

function Building(props) {
	const mapIconStyle = {
		position: 'absolute',
		left: '78rem',
	}
	const DocIconStyle = {
		position: 'absolute',
		left: '81rem',
	}

	const ClipboardIconStyle = {
		position: 'absolute',
		left: '84rem',
	}

	const SearchIconStyle = {
		position: 'absolute',
		left: '.8rem',
		top: '50%',
		transform: 'translateY(-50%)',
	}

	let filterIcon = useState(
		<HoveredIcon
			Component={FilterIcon}
			hoveredIconColor={consts.hoveredIconColor}
			unhoveredIconColor={consts.unhoveredIconColor}
			key="Building__Field__header__filterIcon"
		/>
	)

	let refreshIcon = useState(
		<HoveredIcon
			Component={RefreshIcon}
			hoveredIconColor={consts.hoveredIconColor}
			unhoveredIconColor={consts.unhoveredIconColor}
			key="Building__Field__header__refreshIcon"
		/>
	)
	let styleIcons = {
		position: 'absolute',
		left: '.5rem',
	}

	let [Icons, setIcons] = useState({
		peopleIcon: (
			<PeopleIcon color={consts.unhoveredIconColor} style={styleIcons} />
		),
		calendarIcon: (
			<CalendarIcon
				color={consts.unhoveredIconColor}
				style={styleIcons}
			/>
		),
	})

	const peopleHover = () => {
		setIcons({
			...Icons,
			peopleIcon: (
				<PeopleIcon
					color={consts.hoveredIconColor}
					style={styleIcons}
				/>
			),
		})
	}

	const peopleUnhover = () => {
		setIcons({
			...Icons,
			peopleIcon: (
				<PeopleIcon
					color={consts.unhoveredIconColor}
					style={styleIcons}
				/>
			),
		})
	}

	const calendarHover = () => {
		setIcons({
			...Icons,
			calendarIcon: (
				<CalendarIcon
					color={consts.hoveredIconColor}
					style={styleIcons}
				/>
			),
		})
	}

	const calendarUnhover = () => {
		setIcons({
			...Icons,
			calendarIcon: (
				<CalendarIcon
					color={consts.unhoveredIconColor}
					style={styleIcons}
				/>
			),
		})
	}

	let [activeObjectType, setActiveObjectType] = useState(0)

	const changeActiveObjectType = (index) => {
		setActiveObjectType(index)
	}

	const objectTypesList = arrays.Building.titles.text.map((value, index) => {
		return (
			<ObjectTypes
				key={`Building__objectTypes--${index}`}
				text={value}
				width={arrays.Building.titles.width[index]}
				index={index}
				onClick={() => changeActiveObjectType(index)}
				active={activeObjectType}
			/>
		)
	})

	let [isRegisterVisible, setRegisterVisible] = useState(false)

	const onClickRegisterHandler = () => {
		setRegisterVisible(true)
		props.setBlockWindow()
	}

	const onClickButtonClose = () => {
		setRegisterVisible(false)
		props.removeBlockWindow()
	}

	let [visibleInfo, setVisibleInfo] = useState(undefined)

	const hoverInfo = (index) => {
		setVisibleInfo(index)
	}

	const unhoverInfo = () => {
		setVisibleInfo(undefined)
	}

	return (
		<div className="Building__wrapper__wrapper">
			<div className="Building__wrapper">
				<div className="Building__header">
					<div
						style={mapIconStyle}
						className="Building__header__mapIcon"
					>
						<div
							onMouseEnter={() => hoverInfo('1')}
							onMouseLeave={unhoverInfo}
							className="Building__header__mapIcon__icon"
						>
							<MapIcon />
						</div>
						<Info
							title="Показать на карте"
							subtitle="Показать расположение дома на Яндекс.карты"
							index="1"
							active={visibleInfo}
						/>
					</div>
					<div
						style={DocIconStyle}
						className="Building__header__documentIcon"
					>
						<div
							onMouseEnter={() => hoverInfo('2')}
							onMouseLeave={unhoverInfo}
							className="Building__header__documentIcon__icon"
						>
							<DocumentIcon />
						</div>
						<Info
							title="Документация"
							subtitle="Техническая документация на строение"
							index="2"
							active={visibleInfo}
						/>
					</div>
					<div
						style={ClipboardIconStyle}
						className="Building__header__clipboardIcon"
					>
						<div
							onMouseEnter={() => hoverInfo('3')}
							onMouseLeave={unhoverInfo}
							className="Building__header__clipboardIcon__icon"
						>
							<ClipboardIcon />
						</div>
						<Info
							title="Выписка из ЕГРН"
							subtitle="Посмотреть выписку из ЕГРН"
							index="3"
							active={visibleInfo}
						/>
					</div>
					<div className="Building__header__title">
						<span className="Building__header__title__text">
							{props.location.state.title}
						</span>
					</div>
					<div className="Building__header__subtitle">
						{objectTypesList}
						<div className="Building__header__subtitle__square">
							<span className="Building__header__subtitle__square__text">
								Площадь: <b>25 325,8 </b>
								кв.м
							</span>
						</div>
					</div>
				</div>
				<div className="Building__field">
					<div className="Building__field__header">
						<div className="Building__field__header__search">
							<div className="Building__field__header__search__input">
								<SearchIcon style={SearchIconStyle} />
								<input type="text" />
							</div>
						</div>
						<div className="Building__field__header__icons">
							{filterIcon}
							{refreshIcon}
						</div>
						<div className="Building__field__header__buttons">
							<div
								className="Building__field__header__buttons__meetings"
								onMouseEnter={peopleHover}
								onMouseLeave={peopleUnhover}
							>
								{Icons.peopleIcon}
								<span className="Building__field__header__buttons__meetings__text">
									Собрания
								</span>
							</div>
							<div className="Building__field__header__buttons__registers__wrapper">
								<div
									className="Building__field__header__buttons__registers"
									onMouseEnter={calendarHover}
									onMouseLeave={calendarUnhover}
									onClick={onClickRegisterHandler}
								>
									{Icons.calendarIcon}
									<span className="Building__field__header__buttons__registers__text">
										Реестры
									</span>
								</div>
								<Registers
									isVisible={isRegisterVisible}
									onClick={onClickButtonClose}
								/>
							</div>
						</div>
					</div>
					<div className="Building__field__title">
						<div className="Building__field__title__checkbox">
							<CheckboxIcon />
						</div>
						<BuildingTitle
							text="Номер помещения"
							marginLeft="8rem"
							width="20rem"
						/>
						<div className="Building__field__title__sub">
							<BuildingTitle text="Площадь" width="11.2rem" />
							<BuildingTitle
								text="Назначение"
								width="10.4rem"
								marginLeft="4rem"
							/>
							<BuildingTitle
								text="Статус"
								width="11.2rem"
								marginLeft="3.2rem"
							/>
							<BuildingTitle
								text="Собственники"
								width="12.8rem"
								marginLeft="3.2rem"
							/>
						</div>
					</div>
					<div className="Building__field__body">
						<BuildingBlock
							title_1="этаж 1, помещение I - комнаты 1, 2, 2а, 2б, с 3 по 9, 39, 46, 53, 54, 58; этаж 2, помещение I - комнаты 1, 1а, 38; этаж 3, помещение I - комнаты 1, 1а, с 2 по 33, 33а, 33б, 34, 35; этаж 4, помещение I - комнаты 1, 1а, с 2 по 30, 30а, 30б, 31, 32; этаж 5, помещение I - комнаты 1, 1а, с 2 по 10, 10а, 11, 12; этаж 1, помещение I - комнаты 1, 2, 2а, 2б, с 3 по 9, 39, 46, 53, 54, 58; этаж 2, помещение I - комнаты 1, 1а, 38; этаж 3, помещение I - комнаты 1, 1а, с 2 по 33, 33а, 33б, 34, 35; этаж 4, помещение I - комнаты 1, 1а, с 2 по 30, 30а, 30б, 31, 32;"
							subtitle_1="77:01:0002012:3554"
							title_2="55,9 кв.м"
							subtitle_2="0,35 %"
							title_3="Жилое"
							subtitle_3="Этаж 1"
							title_4="Действующее"
							subtitle_4="с 12.07.2014"
							title_5="Собственники:"
							subtitle_5="Члены ТСЖ:"
							index="1"
							rectangleTop="10"
							rectangleBottom="1"
							status="true"
						/>
					</div>
				</div>
				<div className="Building__footer"></div>
			</div>
			<MembersList />
		</div>
	)
}

const mapDispatchToProps = (dispatch) => {
	return {
		setBlockWindow: () => dispatch({ type: actionTypes.SET_BLOCKER }),
		removeBlockWindow: () => dispatch({ type: actionTypes.REMOVE_BLOCKER }),
	}
}

export default connect(null, mapDispatchToProps)(Building)
