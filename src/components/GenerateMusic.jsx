import React, {useEffect} from 'react'
import {motion} from 'framer-motion'
import {authDeezer} from '../helpers/axiosServices'
import {useActions} from '../hooks/useActions'
import {useSelector} from 'react-redux'
import CachedIcon from '@mui/icons-material/Cached'
import {IconButton} from '@mui/material'
import styles from './generateMusic.module.scss'
import axios from 'axios'
import {FirstInteraction} from './FirstInteraction'


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
                    ? <motion.div
                        className={styles.first}
                        initial={{y: '-1000px'}}
                        animate={{y: 0}}
                        transition={{duration: 2, type: 'spring'}}
                    >
                        <FirstInteraction/>
                    </motion.div>
                    : <motion.div className={styles.reload}
                                  initial={{y: '-500px'}}
                                  animate={{rotate: 360, y: 0}}
                                  transition={{duration: 2, type: 'spring'}}
                    >
                        <motion.div
                            className={styles.wrapper}
                            whileTap={{scale: 0.7, transition: {duration: 1, type: 'spring'}}}
                            onClick={generateNewMusic}
                        >
                            <CachedIcon/>
                        </motion.div>
                    </motion.div>
            }
        </>
    )
}

