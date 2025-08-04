const getHomepage = (req, res) => {
    res.send('Hello controller')
}

const getABC = (req, res) => {
    res.send('abc')
}

const getDuyPhan = (req, res) => {
    res.send('duyphan')
}

module.exports = {
    getHomepage, getABC, getDuyPhan
}