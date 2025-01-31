const username = document.getElementById('username')
const password = document.getElementById('password')
const checkbox = document.getElementById('auto-login')


chrome.storage.local.get(["username", "password","checked"], (result) => {
    if (result.username === undefined || result.password === undefined ) 
        return
    
    username.value = result.username

    password.value = result.password

    checkbox.checked = result.checked

})


username.addEventListener('change',()=>{
    chrome.storage.local.set({ username: username.value });

})

password.addEventListener('change',()=>{
    chrome.storage.local.set({ password: password.value });

})

checkbox.addEventListener('change',()=>{
    chrome.storage.local.set({checked:checkbox.checked})

})