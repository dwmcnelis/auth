import express from 'express'
import expressLayouts from 'express-ejs-layouts'
import cookieSession from 'cookie-session'
import { resolve } from 'path'
import { pages, auth } from './routes'

const app = express()

// Cookie session
app.use(cookieSession({
	name: 'session',
	keys: [
		'PP5a_iRGac8uIAmAPPkzohSo7bB_zeYA8-aws8StHRjgpx9A9iU_E73nTfTxqg4y5MTFGcib5T35593QuH_rW9AoBQFv_joIz5fEdIJbebKKxkxB63mo2oxz5_qoNLcNFmqlbEdN2s8FRuSp4opf3I8YRSvWhJdbrz7RyeRCAHQ',
		'p8mGwge6s62W_e16ZHpp9u-GJOm_9BQZEvNo1L6L6hyjqfk9R7Xy1OkHapBEh-PdiFQdL1VtXWzBrml6BOqzpQV1CwdzYtB-8WFFiz29LvNdEhJHIR1ImqRQxkdeeljzBlBqXslZYfpEc0A6qj5zBh_3ndSzYpsXGGjWgN6pqsc',
		'AkbhrDysvMuJsHu4dCl2qqwrDe2hVlWXQBJu6x7XOOTc3dXwkDG4AZd9kgAywtRqYJvdDcQLIUERLEQ8rBfsMxx6yNnn5WXEegAajkAae0ERvhnVoAqGCoNpydCTkumNAqpHUkzPF3LLlOvQOt8dhFVMoad5QZBgHuR8QYRTG7w',
		'a3WwsJD3EibWaK0PQDEjthSlzMXnJudLRqXk6M4HWz9kqWy17u9QQryrezjVTdHMiEC52rEYjajEb_DewUE11tjxIEhuLzWCD6Gi9kHkCmqHQnVJLU3SnaTOKt7Se95bQj7f9V90B3s4wlf6G_DzBis-wiqMpyHBJFpgHEPopxM'
	],

	// Cookie Options
	maxAge: 15 * 60 * 1000 // 15 minutes
}))

// Static files
app.use(express.static(resolve(__dirname, './public')))

// Templates
app.set('view engine', 'ejs')
app.use(expressLayouts)
app.set('views', resolve(__dirname, './views'))
app.set('layout', './layout')

//Routes
app.use('/', pages)
app.use('/auth', auth)

const server = app.listen(3000, () => {
	console.log(`Listening at http://localhost:${server.address().port}`)
})

