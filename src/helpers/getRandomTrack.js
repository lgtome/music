export function getRandomTrack() {
    const calculations = [10000000, 1000000]
    return Math.trunc(
        (Math.random() * 10) * calculations[Math.round(Math.random())])
}