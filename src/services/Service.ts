import axios from "axios";

const api = axios.create({
    baseURL: 'https://farmagen.onrender.com/'
})

export const buscar = async(url: string, setData: Function) => {
    const response = await api.get(url)
    setData(response.data)
}

export const cadastrar = async(url: string, dados: Object, setData: Function) => {
    const response = await api.post(url, dados)
    setData(response.data)
}

export const atualizar = async(url: string, dados: Object, setData: Function) => {
    const response = await api.put(url, dados)
    setData(response.data)
}

export const deletar = async(url: string) => {
    await api.delete(url)
}