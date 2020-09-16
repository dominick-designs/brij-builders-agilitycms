
const agilityContentSync = require('@agility/content-sync')
const agilityFileSystem = require("@agility/content-sync/src/store-interface-filesystem")

const agilityConfig = {
	guid: 'cb0c8ce2', //Set your guid here
	fetchAPIKey: 'defaultlive.2e62b6c7af261a8e72703bfee7d4c6486573a4c16ea87c89689f321e686fa184', //Set your fetch apikey here
	previewAPIKey: 'defaultpreview.d1abfb2f332a129a48319b5bc2364a44b69b15476b99fb6485eb5a3c7b44ce2e', //set your preview apikey
	languageCode: 'en-us', //the language for your website in Agility CMS
	channelName: 'website', //the name of your channel in Agility CMS
	securityKey: process.env.AGILITY_SECURITY_KEY //the website security key used to validate and generate preview keys
}

const getSyncClient = ({ isPreview, isDevelopmentMode }) => {

	let cachePath = `node_modules/@agility/content-sync/cache/${isPreview ? 'preview' : 'live'}`

	if (!isDevelopmentMode) {
		//we are in prod and need to use a different directory that Vercel understands
		cachePath = "/tmp/agilitycache"
	}
	console.log('cache path = ' + cachePath)
	const apiKey = isPreview ? agilityConfig.previewAPIKey : agilityConfig.fetchAPIKey

	return agilityContentSync.getSyncClient({
		guid: agilityConfig.guid,
		apiKey: apiKey,
		isPreview: isPreview,
		languages: [agilityConfig.languageCode],
		channels: [agilityConfig.channelName],
		store: {
			interface: agilityFileSystem,
			options: {
				rootPath: cachePath
			}
		}
	})
}


module.exports = {
	agilityConfig,
	getSyncClient
}
