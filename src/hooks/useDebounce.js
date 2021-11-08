import {useEffect, useState} from 'react'


export function useDebounce(initialState, delay) {
    const [value, setValue] = useState(initialState)
    useEffect(() => {
        const timeout = setTimeout(() => {
            setValue(initialState)
        }, delay)
        return () => clearTimeout(timeout)
    }, [initialState])
    
    return value
}