import validator from 'validator'

const registerValidator = (data) => {

    let errors = {}

    let { username, email, password, cpassword } = data

    if (localStorage.getItem('registerUser')) {
        let lt = localStorage.getItem('registerUser')
        lt = JSON.parse(lt)

        let userFind = lt.findIndex(item => item.username === username)
        if (userFind > -1) {
            errors.username = "User is allready exists..."
        }
        
        let emailFind = lt.findIndex(item => item.email === email)
        if (emailFind > -1) {
            errors.email = "Email is allready exists..."
        }
    }

    if (validator.isEmpty(username)) {
        errors.username = "Username should be required...!"
    }

    if (!validator.isEmail(email)) {
        errors.email = "check email should be valid...!"
    }
    if (validator.isEmpty(email)) {
        errors.email = "Email should be required...!"
    }

    if (!validator.isStrongPassword(password)) {
        errors.password = "password like Abcd#124"
    }
    if (validator.isEmpty(password)) {
        errors.password = "Password should be required...!"
    }

    if (!validator.equals(password, cpassword)) {
        errors.cpassword = "password should be Match...!";
    }
    if (validator.isEmpty(cpassword)) {
        errors.cpassword = "Confirmed the password...!"
    }

    return {
        isInvalid: Object.keys(errors).length > 0,
        errors: errors
    }

}

export default registerValidator