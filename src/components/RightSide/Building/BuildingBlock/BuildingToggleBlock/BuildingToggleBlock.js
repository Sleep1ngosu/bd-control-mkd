import React from 'react'
import './BuildingToggleBlock.scss'
import BuildingTitle from '../../BuildingTitles/BuildingTitle'
import ToggleBlockOwner from './ToggleBlockOwner/ToggleBlockOwner'

function BuildingToggleBlock(props) {
    let styleWrapper

    props.isHidden === 'true'
        ? (styleWrapper = { display: 'none' })
        : (styleWrapper = { display: 'block' })

    return (
        <div style={styleWrapper}>
            <div className="BuildingToggleBlock__header">
                <BuildingTitle
                    marginLeft="8rem"
                    text="ФИО/НАИМЕНОВАНИЕ СОБСТВЕННИКА"
                    width="36rem"
                />
                <BuildingTitle
                    marginLeft="4rem"
                    text="ДОЛЯ В ПРАВЕ"
                    width="9.6rem"
                />
                <BuildingTitle
                    marginLeft="7.3rem"
                    text="ВОЗНИКНОВЕНИЕ/ПРЕКРАЩЕНИЕ ПРАВА"
                    width="17.8rem"
                    textAlign="center"
                />
                <BuildingTitle
                    marginLeft="4.5rem"
                    text="ЧЛЕНСТВО В ТСЖ"
                    width="14.2rem"
                    textAlign="center"
                />
            </div>
            <div className="BuildingToggleBlock__body">
                <ToggleBlockOwner
                    title_1="Карастанский - Охроменко Никивор Аристархович"
                    title_2="1/4"
                    subtitle_2="534,45 кв.м"
                    title_3="с 12.07.2014"
                    subtitle_3="по настоящее время"
                    title_4="с 12.07.2014"
                    subtitle_4="по настоящее время"
                    index="1"
                />
                <ToggleBlockOwner
                    title_1="Карастанский - Охроменко Никивор Аристархович"
                    title_2="1/4"
                    subtitle_2="534,45 кв.м"
                    title_3="с 12.07.2014"
                    subtitle_3="по настоящее время"
                    index="2"
                    // title_4="с 12.07.2014"
                    // subtitle_4="по настоящее время"
                />
            </div>
        </div>
    )
}

export default BuildingToggleBlock
