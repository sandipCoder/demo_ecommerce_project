import validator from "validator";
const loginValidator = (data) => {
    let errors = {}
    let { email, password } = data

    if (localStorage.getItem('registerUser')) {
        let lt = localStorage.getItem('registerUser')
        lt = JSON.parse(lt)

        console.log("lt", lt)


        let emailIndex = lt.findIndex(item => item.email === email)
        console.log(emailIndex)

        if (emailIndex > -1) {
            let emailFind = lt[emailIndex].email
            let passwordFind = lt[emailIndex].password
            console.log(emailFind, passwordFind)
            if (emailFind != email) {
                errors.email = "Email doese not Exists..!"
            }
            if (passwordFind != password) {
                errors.password = "Password doese not Match..!"
            }
        } else {
            errors.email = "please user register first...."
            errors.password = "please user register first...."
        }
    }

    if (validator.isEmpty(email)) {
        errors.email = "Email should required..!"
    }

    if (validator.isEmpty(password)) {
        errors.password = "Password Should required...!"
    }

    return {
        isInvalid: Object.keys(errors).length > 0,
        errors: errors
    }
}
export default loginValidator