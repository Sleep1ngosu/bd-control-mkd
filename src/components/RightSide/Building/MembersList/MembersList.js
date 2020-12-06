import React, { useState } from 'react'
import './MembersList.scss'
import PeopleListIcon from '../../../../assets/svg/icons/PeopleListIcon'
import PeopleListActiveIcon from '../../../../assets/svg/icons/PeopleListActiveIcon'
import AddMemberIcon from '../../../../assets/svg/icons/AddMemberIcon'
import Letter from './Letter/Letter'
import Block from './Block/Block'
import arrays from '../../../../variables/arrays'

function MembersList() {
    let [isActive, setActive] = useState(false)
    let [menuOpen, setMenuOpen] = useState(undefined)

    let membersListStyle, iconStyle, iconStyleActive

    let arr = ['Иван Иванов Петрович', 'Иван Иванов Петрович']

    if (!isActive) {
        membersListStyle = { display: 'none' }
        iconStyle = { display: 'block' }
        iconStyleActive = { display: 'none' }
    } else if (isActive) {
        membersListStyle = { display: 'block' }
        iconStyle = { display: 'none' }
        iconStyleActive = { display: 'block' }
    }

    const onClickIcon = () => {
        setActive(!isActive)
    }

    const lettersList = arrays.Letters.map((value, index) => {
        return <Letter key={`memberList__lettersList--${index}`} text={value} />
    })

    const menuHandler = (index) => {
        if (index === menuOpen) {
            setMenuOpen(undefined)
        } else {
            setMenuOpen(index)
        }
    }

    const blockList = arr.map((value, index) => {
        return (
            <Block
                key={`MembersList__blockList--${index}`}
                name="Иванов Иван Иванович"
                index={index}
                onClick={() => menuHandler(index)}
                active={menuOpen}
            />
        )
    })

    return (
        <div className="Building__membersList">
            <div
                style={iconStyle}
                onClick={onClickIcon}
                className="Building__membersList__icon"
            >
                <PeopleListIcon />
            </div>

            <div
                style={iconStyleActive}
                onClick={onClickIcon}
                className="Building__membersList__icon__active"
            >
                <PeopleListActiveIcon />
            </div>

            <div
                style={membersListStyle}
                className="Building__membersList__list"
            >
                <div className="MembersList__wrapper">
                    <div className="MembersList__leftSide">
                        <div className="MembersList__leftSide__addMemberIcon">
                            <AddMemberIcon />
                        </div>
                        <div className="MembersList__leftSide__letters">
                            {lettersList}
                        </div>
                    </div>
                    <div className="MembersList__rightSide">
                        <div className="MembersList__rightSide__header">
                            <div className="MembersList__rightSide__header__column-1">
                                ФИО/НАИМЕНОВАНИЕ СОБСТВЕННИКА
                            </div>
                            <div className="MembersList__rightSide__header__column-2">
                                ЧЛЕН ТСЖ
                            </div>
                        </div>
                        <div className="MembersList__rightSide__body">
                            {blockList}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MembersList
