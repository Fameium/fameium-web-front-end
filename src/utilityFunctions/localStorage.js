export default {
    getItem: (key) => { return JSON.parse(window.localStorage.getItem(key)) },
    setItem: (key, value) => window.localStorage.setItem(key, JSON.stringify(value))
}