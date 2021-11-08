import React from 'react'
import {motion} from 'framer-motion'
import {Portal} from '@reach/portal'
import {motions} from '../../utils/index'
import {useSelector} from 'react-redux'
import {useActions} from '../../hooks/useActions'
import {AnimatePresence} from 'framer-motion'
import styles from './Modal.module.scss'
import {SearchTrackByArtist} from './SearchTrackByArtist'


export const Modal = ({children}) => {
    const {isOpen} = useSelector(state => state.modal)
    const {toggleModal} = useActions()
    return (
        <Portal>
            <AnimatePresence>
                {
                    isOpen &&
                    <motion.div
                        className={styles.wrapper} onClick={() => toggleModal()}
                        initial={'hide'}
                        animate={'visible'}
                        transition={'transition'}
                        exit={'hide'}
                        variants={motions.modalMotion}
                    >
                        <div className={styles.content}
                             onClick={(e) => e.stopPropagation()}>
                            {children}
                        </div>
                    </motion.div>
                }
            </AnimatePresence>
        </Portal>
    )
}

