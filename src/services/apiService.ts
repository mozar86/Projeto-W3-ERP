import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000',
});

export const getProducts = async () => {
    try {
        const response = await api.get('/products');
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar produtos", error);
        throw error;
    }
};

export const getClients = async () => {
    try {
        const response = await api.get('/clients');
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar clientes", error);
        throw error;
    }
};

export const login = async (credentials: { user: string; password: string }) => {
    try {
        const response = await api.post('/login', credentials);
        return response.data;
    } catch (error) {
        console.error("Erro ao realizar login:", error);
        throw error;
    }
};