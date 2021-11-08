import React, {useEffect} from 'react'
import {AnimatePresence, motion, useAnimation} from 'framer-motion'
import {authD, authDeezer} from '../helpers/axiosServices'
import {useActions} from '../hooks/useActions'
import {useSelector} from 'react-redux'
import CachedIcon from '@mui/icons-material/Cached'
import {IconButton} from '@mui/material'
import styles from './generateMusic.module.scss'
import axios from 'axios'
import {FirstInteraction} from './FirstInteraction'
import {motions} from '../utils'


export const GenerateMusic = () => {
    const {fetchRandomTrack, toggleLoading, generateNewTrack} = useActions()
    const {isError, isLoading, preview} = useSelector(state => state.player)
    useEffect(() => {
        authDeezer()
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            fetchRandomTrack()
        }, 500)

        preview && clearInterval(interval)

        return () => clearInterval(interval)
    }, [preview])

    function generateNewMusic() {
        generateNewTrack()
    }


    return (
        <>
            {
                preview === 'init'
                    ?
                    <motion.div
                        className={styles.first}
                        initial={'initial'}
                        animate={'active'}
                        transition={{duration: 2, type: 'spring'}}
                        variants={motions.defaultMotion}
                    >
                        <FirstInteraction/>
                    </motion.div>
                    :
                    <motion.div className={styles.reload}
                                animate={'active'}
                                transition={'transition'}
                                variants={motions.defaultMotion}
                    >
                        <motion.div
                            className={styles.wrapper}
                            whileTap={{scale: 0.6, transition: {duration: 0.7, type: 'spring'}}}
                            onClick={generateNewMusic}
                        >
                            <CachedIcon/>
                        </motion.div>
                    </motion.div>
            }
        </>
    )
}

