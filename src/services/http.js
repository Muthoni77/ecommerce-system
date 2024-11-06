import axios from 'axios';
import { toast } from 'react-toastify';

axios.interceptors.response.use(null, error => {

    const expectedErrors = error.response && error.response.status >= 400 && error.response.status < 500;

    if (!expectedErrors) {
        toast.error("An unexpected error occurred!!")
        console.log("Error details: " , error.response.data.message);
    }
})


const exportParameters = {
    get: axios.get,
    post: axios.post
}

export default exportParameters;