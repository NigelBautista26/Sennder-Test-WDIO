const { join } = require('path')

exports.config = {
	runner: 'local',
	path: '/',
	specs: [
		'./e2e/specs/*.js'
	],
	exclude: [],
	maxInstances: 1,
	capabilities: [{
		maxInstances: 1,
		browserName: 'chrome',
		'goog:chromeOptions': {
			args: ['incognito']
		}
	}],
	// Level of logging verbosity: trace | debug | info | warn | error | silent
	logLevel: 'silent',
	bail: 0,
	baseUrl: 'https://sprintboards.io',
	waitforTimeout: 10000,
	connectionRetryTimeout: 90000,
	connectionRetryCount: 3,
	framework: 'mocha',
	reporters: ['spec'],
	mochaOpts: {
		ui: 'bdd',
		timeout: 60000
	},
	services: [
		['image-comparison',
			{
				baselineFolder: join(process.cwd(), './test/docs/'),
				formatImageName: '{tag}-{logName}-{width}x{height}',
				screenshotPath: join(process.cwd(), '.tmp/'),
				savePerInstance: true,
				autoSaveBaseline: true,
				blockOutStatusBar: true,
				blockOutToolBar: true,
				isHybridApp: true,
				misMatchPercentage: 2.00,
				tabbableOptions: {
				}
			}
		],
		['chromedriver']
	],
	before: function () {
		let chai = require('chai')
		global.chai = chai
		chai.use(require('chai-string'))
		global.expect = chai.expect
	},
}