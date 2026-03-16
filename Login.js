
let form = document.querySelector('form')
console.log(form)

form.onsubmit = (e) => {
    e.preventDefault()
    console.log("form submitted")

    //! getting user Data from the user
    let email = document.getElementsByTagName('input')[0].value
    let password = document.getElementsByTagName('input')[1].value
    console.log(email)
    console.log(password)

    //! getting stored Data from local Storage

    // let storedData = localStorage.getItem('userInfo')
    // console.log(storedData)

    // let regularObj = JSON.parse(storedData)
    // console.log(regularObj)

    // if (email === regularObj.email && password === regularObj.password) {
    //     alert("Login Successfull")
    //     window.location.href = "./homePage.html"
    // }
    // else {
    //     alert("Mismatch with the data")
    // }

    let storedData = JSON.parse(localStorage.getItem('userInfo'))
    console.log(storedData)

    if (email === storedData.email && password === storedData.password) {
        alert("Login Successfull")
        window.location.href = "./homePage.html"
    }
    else {
        alert("Mismatch with the data")
    }
}