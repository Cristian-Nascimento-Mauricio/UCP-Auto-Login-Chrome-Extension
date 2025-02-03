// Declaration of login page components
const username = document.getElementById('username')
const password = document.getElementById('password')
const button = document.getElementById('button-login')
const cookies = document.cookies

// Input event to trigger login button
const inputEvent = new Event('input', { bubbles: true });

run(username , password , button)

function run(username , password , button){
    // Check if you are already logged in
    if(getCookie('user-data') != null)
        return

    // Get values of stored 
    chrome.storage.local.get(['username', 'password','checked'], (result) => {
        if (result.username === undefined || result.password === undefined ) 
            return
    

        username.value = result.username;
        username.dispatchEvent(inputEvent)

        password.value = result.password;
        password.dispatchEvent(inputEvent)

        if(result.checked)
            button.click()

    });


}

function getCookie(nome) {
    let cookies = document.cookie.split('; ');
    for (let cookie of cookies) {
        let [chave, valor] = cookie.split('=');
        if (chave === nome) {
            return decodeURIComponent(valor);
        }
    }
    return null;
}
