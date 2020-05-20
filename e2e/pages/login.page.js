const username = 'sennderqa3@gmail.com'
const password = 'n*H7A7f@&ikbwu'

class LoginPage {

	open() { browser.url('/auth/login/') }

	get usernameField() { return $('//*[@id="root"]/div/form/div/div/div/div/div[1]/div/input') }

	get passwordField() { return $('//*[@id="root"]/div/form/div/div/div/div/div[2]/div/input') }

	get loginButton() { return $('.btn.btn-primary.px-4') }

	login() {
	  this.usernameField.setValue(username)
	  this.passwordField.setValue(password)
	  this.loginButton.click()
	}
}
module.exports = new LoginPage();