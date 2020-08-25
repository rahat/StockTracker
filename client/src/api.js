import axios from 'axios';

const client = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL + ':3000/',
})

export const listAlerts = () => client.get(`/alerts`)
export const getAlert = id => client.get(`/alerts/${id}`)
export const addAlert = data => client.post(`/alerts`, data)
export const updateAlert = (id, data) => client.put(`/alerts/${id}`, data)
export const deleteAlert = id => client.delete(`/alerts/${id}`)

const api = {
    listAlerts,
    getAlert,
    addAlert,
    updateAlert,
    deleteAlert,
}

export default api;