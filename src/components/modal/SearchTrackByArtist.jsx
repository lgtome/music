import React, {useCallback, useEffect, useRef, useState} from 'react'
import {Input, InputAdornment, InputLabel} from '@mui/material'
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic'
import styles from './searchTrackByArtist.module.scss'
import {useActions} from '../../hooks/useActions'
import {useDebounce} from '../../hooks/useDebounce'
import {useSelector} from 'react-redux'
import {Loader} from '../spinner/Loader'


export const SearchTrackByArtist = () => {
    const {fetchTrackByArtist} = useActions()
    const {currentTrack, isLoading} = useSelector(state => state.search)
    const [search, setSearch] = useState('')
    const debouncedSearch = useDebounce(search, 500)
    useEffect(() => {
        debouncedSearch && fetchTrackByArtist(debouncedSearch)
    }, [debouncedSearch])

    return (
        <>
            <Input
                className={styles.input}
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                id="input-with-icon-adornment"
                startAdornment={
                    <InputAdornment position="start">
                        <LibraryMusicIcon/>
                    </InputAdornment>
                }
            />
            {
                isLoading && <Loader/>
            }
        </>
    )
}

