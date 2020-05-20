const greenCardTitleValue = 'Goal was achieved'
const greenCardDescriptionValue = 'Sprint was well planned'
const redCardTitleValue = 'Goal was not achieved'
const redCardDescriptionValue = 'No description provided.'
const deletePopUpTitle = 'Delete Card'
const messageForDelitingCard = 'Are you sure you want to continue?'

class cardPage {

  get cardTitleText() { return $('#add-card-modal') }

  get addTitle() { return $('//p[2]/input') }

  get addDescription() { return $('//p[2]/textarea') }

  get greenPlusButton() { return $('.btn-link.border-success.empty-card.text-success') }

  get addGreenCard() { return $('.btn.text-white.btn-success') }

  get greenCardTitle() { return $('.border-success.bg-success.px-2') }

  get greenCardDesc() { return $('.border-success.text-center > div.react-contextmenu-wrapper > div >p') }

  get redPlusButton() { return $('.btn-link.border-danger.empty-card.text-danger') }

  get addRedCard() { return $('.btn.text-white.btn-danger') }

  get redCardTitle() { return $('.border-danger.bg-danger.px-2') }

  get redCardDesc() { return $('.border-danger.text-center > div.react-contextmenu-wrapper > div >p') }

  get thumbsUpIcon() { return $('div:nth-child(1) > div > div > div > div > div:nth-child(3) > ul > li.ml-3') }

  get thumbsUpIconCount() { return $('.btn.btn-link.disabled.pointer-events.text-success.mb-0.p-0') }

  get deleteRedCardButton() { return $('div:nth-child(2) > div > div > div > div > div:nth-child(3) > ul > li:nth-child(2) > button') }

  get deletePopUpTitleText() { return $('.modal-title.h4') }

  get deletePopUpStmtText() { return $('.modal-body > p.mb-0') }

  get confirmDelete() { return $('.btn.btn-danger') }

  createGreenCard() {
    this.greenPlusButton.click()
    this.addTitle.setValue(greenCardTitleValue)
    this.addDescription.setValue(greenCardDescriptionValue)
    this.addGreenCard.click()
    expect(this.greenCardTitle.getText()).to.equal(greenCardTitleValue)
    expect(this.greenCardDesc.getText()).to.equal(greenCardDescriptionValue)
  }

  createRedCard() {
    this.redPlusButton.click()
    this.addTitle.setValue(redCardTitleValue)
    this.addDescription.setValue(redCardDescriptionValue)
    this.addRedCard.click()
    expect(this.redCardTitle.getText()).to.equal(redCardTitleValue)
    expect(this.redCardDesc.getText()).to.equal(redCardDescriptionValue)
  }

  ThumbsUp() { 
    this.thumbsUpIcon.click()
    expect(this.thumbsUpIconCount.getText()).to.equal("1")
   }

  deleteRedCard() {
     this.deleteRedCardButton.click()
     expect(this.deletePopUpTitleText.getText()).to.equal(deletePopUpTitle)
     expect(this.deletePopUpStmtText.getText()).to.equal(messageForDelitingCard)
     this.confirmDeleteButton()
    }

  confirmDeleteButton() {
    this.confirmDelete.click()
    let elem = $('.card.m-1.no-highlighting.animated.border-danger.text-center')
    let deleteSuccessMessage = $('.toast-message')
    browser.waitUntil(() => elem.isExisting() == false)
    browser.waitUntil(() => deleteSuccessMessage.isExisting() == false)
  }

}
module.exports = new cardPage()