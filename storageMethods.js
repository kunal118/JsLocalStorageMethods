//view it in devTools Applications

localStorage.setItem("name","Kunal")
console.log(localStorage.getItem("name"))
localStorage.removeItem("name")

sessionStorage.setItem("name","Kunal")
console.log(sessionStorage.getItem("name"))
sessionStorage.removeItem("name")

document.cookie = "name=Kunal"//creates a backdated cookie
document.cookie = "hello=test123; expires="+new Date(2022,11,11).toUTCString()
console.log(document.cookie);

//advisable to use library as string parsing is hard

//cookie max age set to 400 days by chrome about 13 months

//local storage never expires //can be accessed from other windows
//cookies have expiry time //can be accessed from other windows
//session expires on tab close //cannot be accessed from other
