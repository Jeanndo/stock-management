import axios from 'axios'

const API = axios.create({baseURL:'http://localhost:5000'})

//const url='http://localhost:5000/products';

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
  
    return req;
  });


export const fetchProducts  = ()=>API.get('/products');
export const createProduct  = (newProduct)=>API.post('/products',newProduct);
export const updateProduct  = (id,updatedProduct)=>API.patch(`/products/${id}`,updatedProduct);
export const deleteProduct  = (id)=>API.delete(`/products/${id}`);
export const payment = (paymentInfo)=>API.post(`/products/pay`,paymentInfo)
export const approveEmail = (formData)=>API.post('products/emails',formData)

export const signIn = (formData)=>API.post('/user/signin',formData);
export const signUp = (formData)=>API.post('/user/signup',formData);

export const fetchUsers =()=>API.get('/user');
export const deleteUser = (id)=>API.delete(`/user/${id}`);
export const forgotPassword = (email)=>API.patch(`/user/forgot-password`,email);
export const resetPassword = (formData)=>API.patch('/user/reset-password',formData);
