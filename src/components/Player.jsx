import React, {useEffect, useRef, useState} from 'react'
import {styled, useTheme} from '@mui/material/styles'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Slider from '@mui/material/Slider'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import PauseRounded from '@mui/icons-material/PauseRounded'
import PlayArrowRounded from '@mui/icons-material/PlayArrowRounded'
import VolumeUpRounded from '@mui/icons-material/VolumeUpRounded'
import VolumeDownRounded from '@mui/icons-material/VolumeDownRounded'
import {useSelector} from 'react-redux'


const Widget = styled('div')(({theme}) => ({
    padding: 16,
    borderRadius: 16,
    width: '80vw',
    maxWidth: '100%',
    margin: '2vh 0',
    position: 'relative',
    zIndex: 1,
    backgroundColor:
        theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.6)' :
            'rgba(255,255,255,0.4)',
    backdropFilter: 'blur(40px)',
    transition: 'all 1s ease',
    '&:hover': {
        backgroundColor: 'rgba(255,255,255,0.6)'
    }
}))

const CoverImage = styled('div')({
    width: 100,
    height: 100,
    objectFit: 'cover',
    overflow: 'hidden',
    flexShrink: 0,
    borderRadius: 8,
    backgroundColor: 'rgba(0,0,0,0.08)',
    '& > img': {
        width: '100%',
    },
})

export function MusicPlayer() {
    const theme = useTheme()
    const [paused, setPaused] = useState(true)
    const playerRef = useRef(null)
    const [src, setSrc] = useState('')
    const {name, track, preview, albumCover} = useSelector(
        state => state.player)
    const [volume, setVolume] = useState(50)

    useEffect(() => {
        if (playerRef.current) {
            paused ? playerRef.current.pause() : playerRef.current.play()
        }
    }, [paused])

    useEffect(() => {
        !paused && setPaused(prev => !prev)

        if (preview && preview !== 'init') {
            setSrc(preview)
            playerRef.current.volume = 0.5
            playerRef.current.muted = false
            playerRef.current.load()
            paused && setPaused(prev => !prev)
        }

    }, [preview])

    function changeVolume(event) {
        playerRef.current && (playerRef.current.volume = event.target.value / 100)
        setVolume(event.target.value)
    }

    const mainIconColor = theme.palette.mode === 'dark' ? '#fff' : '#000'
    const lightIconColor =
        theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.4)' :
            'rgba(0,0,0,0.4)'
    return (
        <Box sx={{width: '100%', overflow: 'hidden'}}>
            <Widget>
                <Box sx={{display: 'flex', alignItems: 'center'}}>
                    <CoverImage>
                        <img
                            alt="can't win - Chilling Sunday"
                            src={albumCover}
                        />
                    </CoverImage>
                    <Box sx={{ml: 1.5, minWidth: 0}}>
                        <Typography variant="caption" color="text.secondary"
                                    fontWeight={500}>
                            {name || 'artist'}
                        </Typography>
                        <Typography noWrap letterSpacing={-0.25}>
                            {track || 'song name'}
                        </Typography>
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mt: -1,
                    }}
                >
                    <IconButton
                        aria-label={paused ? 'play' : 'pause'}
                        onClick={() => setPaused(!paused)}
                    >
                        {paused ? (
                            <PlayArrowRounded
                                sx={{fontSize: '3rem'}}
                                htmlColor={mainIconColor}
                            />
                        ) : (
                            <PauseRounded sx={{fontSize: '3rem'}}
                                          htmlColor={mainIconColor}/>
                        )}
                    </IconButton>
                </Box>
                <Stack spacing={2} direction="row" sx={{mb: 1, px: 1}}
                       alignItems="center">
                    <VolumeDownRounded htmlColor={lightIconColor}/>
                    <Slider
                        aria-label="Volume"
                        defaultValue={playerRef.current && playerRef.current.volume}
                        value={volume}
                        onChange={(event) => changeVolume(event)}
                        sx={{
                            color: theme.palette.mode === 'dark' ? '#fff' :
                                'rgba(0,0,0,0.87)',
                            '& .MuiSlider-track': {
                                border: 'none',
                            },
                            '& .MuiSlider-thumb': {
                                width: 24,
                                height: 24,
                                backgroundColor: '#fff',
                                '&:before': {
                                    boxShadow: '0 4px 8px rgba(0,0,0,0.4)',
                                },
                                '&:hover, &.Mui-focusVisible, &.Mui-active': {
                                    boxShadow: 'none',
                                },
                            },
                        }}
                    />
                    <VolumeUpRounded htmlColor={lightIconColor}/>
                </Stack>
            </Widget>
            <audio controls ref={playerRef} hidden={'hidden'} muted autoPlay>
                <source src={src}/>
            </audio>
        </Box>
    )
}

