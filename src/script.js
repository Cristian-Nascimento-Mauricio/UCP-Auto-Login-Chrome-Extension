// Declaration of popup components
const username = document.getElementById('username')
const password = document.getElementById('password')
const checkbox = document.getElementById('auto-login')

// Verification of stored values to insert into the login page
chrome.storage.local.get(["username", "password","checked"], (result) => {
    if (result.username === undefined || result.password === undefined ) 
        return
    
    username.value = result.username

    password.value = result.password

    checkbox.checked = result.checked

})

// Save username 
username.addEventListener('change',()=>{
    chrome.storage.local.set({ username: username.value });

})

// Save password
password.addEventListener('change',()=>{
    chrome.storage.local.set({ password: password.value });

})

// Save cheeckbox status 
checkbox.addEventListener('change',()=>{
    chrome.storage.local.set({checked:checkbox.checked})

})