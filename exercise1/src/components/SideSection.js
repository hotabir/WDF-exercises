import React from 'react'
import styles from './SideSection.module.css'

export default function SideSection(props) {
    return (
        <div className={ styles.header }>Luetuimmat
            <div>
            <span className={ styles.container }>{ props.otsikko }| </span>    
            <span className={ styles.containerText }>{ props.teksti }</span>
            </div>
        </div>
    )
}
