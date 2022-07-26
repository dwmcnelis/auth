import express from 'express'

const router = express.Router()

// home page
router.get('/', function (req, res) {
	res.render('pages/home', { title: 'Home Page' })
})

// about page
router.get('/about', function (req, res) {
	res.render('pages/about', { title: 'About' })
})

export default router
