const express = require('express')
// 创建路由对象
const router = express.Router()
// 创建路由规则
router.get('/home', (req, res) => {
    res.send('前台')
})
router.get('/search', (req, res) => {
    res.send('搜索')
})
router.get('/admin', (req, res) => {
    res.send('后台')
})
router.get('/setting', (req, res) => {
    res.send('设置')
})
router.get('*', (req, res) => {
    res.status(404).send('404')
})

// 暴露router
module.exports = router