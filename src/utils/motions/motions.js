export const modalMotion = {
    hide: {
        opacity: 0,
        scale: 0.8
    },
    visible: {
        opacity: 1, scale: 1
    },
    transition: {
        duration: 0.5, type: 'spring'
    }
}
export const btnMotion = {
    rest: {
        color: '#505050',
        x: 50,
        transition: {
            duration: 2,
            type: 'spring'
        }
    },
    hover: {
        x: -30,
        transition: {
            duration: 2,
            type: 'spring'
        }
    }
}
export const textMotion = {
    rest: {
        opacity: 0,
        x: -100,
        duration: 2,
        type: 'spring'
    },
    hover: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 2,
            type: 'spring'
        }
    }
}
export const defaultMotion = {
    rest: {},
    initial: {
        y: -1000
    },
    active: {
        y: 0
    },
    transition: {
        duration: 2,
        type: 'spring'
    }
}