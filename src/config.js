if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config()
}

export default {
	siteUrl: process.env.SITE_URL,
	google: {
		clientId: process.env.GOOGLE_CLIENT_ID,
		clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		redirectUrl: process.env.GOOGLE_REDIRECT_URL,
		discoveryUrl: 'https://accounts.google.com'
	},
	discord: {
		clientId: process.env.DISCORD_CLIENT_ID,
		clientSecret: process.env.DISCORD_CLIENT_SECRET,
		redirectUrl: process.env.DISCORD_REDIRECT_URL,
		scope: 'identify email guilds',
		authorizeUrl: 'https://discord.com/api/oauth2/authorize',
		tokenUrl: 'https://discord.com/api/oauth2/token',
		userinfoUrl: 'https://discord.com/api/users/@me'
	}
}
