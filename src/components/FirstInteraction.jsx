import React from 'react'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline'
import {useActions} from '../hooks/useActions'


export const FirstInteraction = () => {
    const {generateNewTrack} = useActions()
    const firstInteraction = () => {
        generateNewTrack()
    }
    return (
        <PlayCircleOutlineIcon onClick={firstInteraction}/>
    )
}

