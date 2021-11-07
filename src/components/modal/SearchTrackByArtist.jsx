import React, {useRef} from 'react'
import {Input, InputAdornment, InputLabel} from '@mui/material'
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic'
import styles from './searchTrackByArtist.module.scss'
import {useActions} from '../../hooks/useActions'


export const SearchTrackByArtist = () => {
    const {fetchTrackByArtist} = useActions()
    const ref = useRef()


    function handleClick() {
        fetchTrackByArtist(ref.current.value)
    }

    return (
        <div>
            <Input
                className={styles.input}
                inputRef={ref}
                id="input-with-icon-adornment"
                startAdornment={
                    <InputAdornment position="start">
                        <LibraryMusicIcon/>
                    </InputAdornment>
                }
            />
            {/*<button onClick={handleClick}>dasdas</button>*/}
        </div>
    )
}

