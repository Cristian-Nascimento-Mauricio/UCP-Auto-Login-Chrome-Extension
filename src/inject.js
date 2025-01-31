// Declaration of login page components
const username = document.getElementById('username')
const password = document.getElementById('password')
const button = document.getElementById('button-login')

// Input event to trigger login button
const inputEvent = new Event('input', { bubbles: true });

// Get values of stored 
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