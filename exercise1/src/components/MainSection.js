import React from 'react'
import styles from './MainSection.module.css'
import gif from '../Kuvat/Korona.gif'


export default function MainSection() {
    return (
        <div>
            <div className= { styles.header }>
                <div>Koronavirus</div>
                <div><img  className={ styles.image } src={gif} alt="Koronavirus" /></div>
                <span className= { styles.containerHeader }>Koronavirus | </span>
                <span className= { styles.container }>HS:n korona­&shy;katsaus: Sairaala&shy;­potilaiden 
                määrässä ei selkeää käännettä alaspäin, kakkos­&shy;rokotteiden antaminen hidastunut</span>
                <div className={ styles.label } >Kotimaa</div> 
            </div>
            <div className= { styles.headerPieni }>
                <span className= { styles.containerHeader }>Matkustus | </span>
                <span className= { styles.containerPieni }>Aurinko­&shy;rannikolle odotetaan ryntäystä ja alueen suomalais&shy;­yhteisö voi kokea nuorennus&shy;­leikkauksen: ”Kymmeniä kyselyitä vuokra­kohteista päivässä”</span>
                <div className={ styles.label } >Kotimaa</div>
            
            </div>
        </div>
    )
}
