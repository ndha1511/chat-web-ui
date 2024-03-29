import requestApi from "../utils/Request"

export const getUserInfo = async (phoneNumber) => {
    try {
        const response = await requestApi(`/users/${phoneNumber}`, "GET", [], true);
        return response.data;
    } catch (error) {
        return Promise.reject(error);
    }
    
}

export const getUserById = async (userId) => {
    try {
        const response = await requestApi(`/users/id/${userId}`, "GET", [], true);
        return response.data;
    } catch (error) {
        return Promise.reject(error);
    }
}