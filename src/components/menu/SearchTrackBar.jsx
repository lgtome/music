import React from 'react'
import styles from './SearchTrackBar.module.scss'
import {Typography} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import {motion} from 'framer-motion'
import {useActions} from '../../hooks/useActions'
import {motions} from '../../utils'


export const SearchTrackBar = () => {
    const {toggleModal} = useActions()

    function searchHandler() {
        toggleModal()
    }

    return (
        <div className={styles.wrapper}>
            <motion.div
                className={styles.content}
                initial={'rest'}
                whileHover={'hover'}
                variants={motions.btnMotion}
                onClick={searchHandler}
            >
                <SearchIcon className={styles.btn}/>
                <motion.div
                    variants={motions.textMotion}
                >
                    <Typography className={styles.tiny}>
                        search track &nbsp;
                    </Typography>
                </motion.div>
            </motion.div>
        </div>
    )
}

