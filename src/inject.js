const username = document.getElementById('username')
const password = document.getElementById('password')
const button = document.getElementById('button-login')

const inputEvent = new Event('input', { bubbles: true });


chrome.storage.local.get(["username", "password","checked"], (result) => {
    if (result.username === undefined || result.password === undefined ) 
        return
    

    username.value = result.username;
    username.dispatchEvent(inputEvent)

    password.value = result.password;
    password.dispatchEvent(inputEvent)

    if(result.checked)
        button.click()

});