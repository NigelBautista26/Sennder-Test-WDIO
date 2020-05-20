const loginPage = require('../pages/login.page')
const homePage = require('../pages/home.page')
const boardPage = require('../pages/board.page')
const cardPage = require('../pages/card.page')

describe('Test Scenario To Test...', () => {
	before(() => {
		loginPage.open()
		loginPage.login()
	})

	it('Create Board', () => {
		homePage.clickCreateButton()
		boardPage.createBoard()
	})
	
	it('Add a Green card.', () => {
		cardPage.createGreenCard()
	})

	it('Add a Red card.', () => {
		cardPage.createRedCard()
	})

	it('Click thumbs up for the first card.', () => {
		cardPage.ThumbsUp()
	})

	it('Delete the red card created', () => {
		cardPage.deleteRedCard()
	})
					
})