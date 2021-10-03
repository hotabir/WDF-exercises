import React from 'react';
import styles from './Header.module.css';


export default function Header() {
    return (
        <div className={ styles.headerBackground }>
            <div className={ styles.container }>
                <div className={ styles.brand }>HELSINGIN SANOMAT</div>
                <div className= { styles.valilehdet }>Uutiset</div>
                <div className= { styles.valilehdet }>Lehdet</div>
                <div className={ styles.nappi }>Tilaa
                Kirjaudu
                Valikko</div>
            </div>
        </div>
    )
}
