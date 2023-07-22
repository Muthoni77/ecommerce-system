import http from './http'

let server_url = process.env.REACT_APP_SERVER_URL;

const paths = {
    register: {
        path: '/api/user/register'
    },
    login: {
        path: '/api/user/Login'
    },
    products: {
        path: '/'
    },
    forgetPassword: {
        path: '/api/user/forgotpass'
    },
    resetPassword: {
        path: '/api/user/resetpass'
    },
    categories: {
        path: '/'
    }
}


const loginUser = async (email, password) => {
    const requestObject = {
        email: email,
        password: password
    }
    const response = await http.post(server_url + paths.login.path , requestObject )
    return response;
}

const registerUser = async (requestObject) => {
    const response = await http.post(server_url + paths.register.path , requestObject )
    return response;
}
const forgotPassUser = async (email) => {
    const requestObject={
        email: email,
    }
    const response = await http.post(server_url + paths.forgetPassword.path , requestObject )
    return response;
}
const resetPassUser = async (newPassword) => {
    const requestObject={
        newPassword: newPassword,
    }
    const response = await http.post(server_url + paths.resetPassword.path , requestObject )
    return response;
}


const exportFunctions = {loginUser, registerUser,forgotPassUser, resetPassUser}


export default exportFunctions;