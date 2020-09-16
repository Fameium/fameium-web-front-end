export default {
    base64: (p1, p2) => { return 'Basic ' + new Buffer(p1 + ':' + p2).toString('base64') }
}