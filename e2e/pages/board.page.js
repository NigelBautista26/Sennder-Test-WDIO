const boardTitleValue = 'Create a Board'

class boardPage {

  get title() { return $('.font-weight-normal.mb-0') }

  get sessionNameField() { return $('//*[@id="wrapper-inner"]/div/form/div[1]/div/div[1]/input') }

  get chooseOwnerSelection() { return $('//*[@id="wrapper-inner"]/div/form/div[1]/div/div[2]/select/option[2]') }

  get createBoardButton() { return $('.btn.btn-primary.shadow-sm.px-3') }

  get confirmationPopup() { return $('div.swal-title') }

  createBoard() {
    this.sessionNameField.setValue('Nigels Board')
    expect(this.title.getText()).to.equal(boardTitleValue)
    this.chooseOwnerSelection.click()
		expect(browser.getUrl()).to.contain('boards/create')
    this.createBoardButton.click()
    expect(browser.getUrl()).to.contain('https://sprintboards.io/boards/')
		expect(this.confirmationPopup.getText()).to.equal('Created')
  }
}
module.exports = new boardPage()