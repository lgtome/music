import React, {useEffect} from 'react'
import {motion} from 'framer-motion'
import {authDeezer} from '../helpers/axiosServices'
import {useActions} from '../hooks/useActions'
import {useSelector} from 'react-redux'
import CachedIcon from '@mui/icons-material/Cached'
import {IconButton} from '@mui/material'
import styles from './generateMusic.module.scss'
import axios from 'axios'


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
            <motion.div className={styles.reload}
                        animate={{rotate: 360}}
                        transition={{duration: 2, type: 'spring'}}
                        onClick={generateNewMusic}
            >
                <motion.div
                    className={styles.wrapper}
                    whileTap={{rotate: 360, transition: {duration: 1, type: 'spring'}}}
                >
                    <CachedIcon/>
                </motion.div>
            </motion.div>
        </>
    )
}

