export const localStorageService = (function () {
    return {
        getValue: (key) => !(typeof window === 'undefined') && localStorage.getItem(key),
        setValue: (key, value) => !(typeof window === 'undefined') && localStorage.setItem(
            key, value)
    }
})()

