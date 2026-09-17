import axios from 'axios';
import type { Language } from '../types/types';

let token: string | null = null;

interface LoginCredentials {
    email: string;
    password: string;
}

interface LoginResponse {
    token: string;
    user: {
        id: number;
        username: string;
        email: string;
        avatar_id: number | null;
        avatar_path: string | null;
    }
}

const setToken = (newToken: string): void => {
  token = newToken;
}

const makeHeader = () => {
    if (token) {
        return { headers: { Authorization: `Bearer ${token}` } };
    }   
    return undefined;
}

const postLogin = (credentials: LoginCredentials) => {
    return axios
        .post<LoginResponse>('/login', credentials, makeHeader())
        .then(response => response.data);
}

const getLanguages = () => {
    return axios
        .get<Language[]>('/languages', makeHeader())
        .then(response => response.data)
}

export default {
    postLogin,
    getLanguages,
    setToken
}

// const getAllCartItems = () => {
//     const request = axios.get('/cartitems', makeHeader());
//     return request
//         .then(response => {
//             return response.data;
//         })
//         .catch(error => {
//             console.error("Error fetching cart items:", error);
//             throw new Error('Failed to fetch cart items');
//         });
// }

// const addCartItem = (newCartItem) => {
//     const request = axios.post('/cartitems', newCartItem, makeHeader())
//     return request.then(response => response.data);
// }

// const updateCartItem = (id, updatedCartItem) => {
//     return axios.put(`/cartitems/${id}`, updatedCartItem, makeHeader())
//         .then(response => response.data || updatedCartItem)
//         .catch(error => {
//             console.error("Error updating cart item:", error.response?.data || error.message);
//             throw error;
//         });
// };

// const postOrder = (newOrder) => {
//     return axios.post('/orders', newOrder, makeHeader())
//     .then(response => response.data)
//     .catch(error => {
//         console.error('Error posting order:', error);
//         throw error;
//       });
// }

// const clearCart = () => {
//     return axios.post('/clearcartitems', {}, makeHeader())
//     .then(response => response.data)
//     .catch(error => {
//         console.error("Failed to clear cart: ", error);
//         throw error;
//     });
// }

// const getAllOrders = () => {
//     const request = axios.get('/orders', makeHeader());
//     return request
//         .then(response => {
//             return response.data;
//         })
//         .catch(error => {
//             console.error("Error fetching all orders:", error);
//             throw new Error('Failed to fetch all orders');
//         });
// }

// const removeCartItem = (id) => {
//     return axios.delete(`/cartitems/${id}`, makeHeader())
//     .then(response => response.data);
// }