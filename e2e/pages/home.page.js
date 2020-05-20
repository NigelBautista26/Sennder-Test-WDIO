class HomePage {

    get createBoardButton() { return $('//*[@id="navbar"]/ul/li[1]/a') }

    clickCreateButton() { this.createBoardButton.click() }
    
}
module.exports = new HomePage()