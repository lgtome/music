import React from 'react'
import styles from './music.module.scss'
import {MusicPlayer} from '../../components/Player'
import {GenerateMusic} from '../../components/GenerateMusic'


export const Music = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <GenerateMusic/>
                <MusicPlayer/>
            </div>
        </div>
    )
}

