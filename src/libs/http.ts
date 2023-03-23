import axios,{InternalAxiosRequestConfig,AxiosResponse} from "axios"

export const http = axios.create({
    baseURL:"http://localhost:8000",
    timeout:5000
})

http.interceptors.request.use((config:InternalAxiosRequestConfig)=>{
    return config
},(error:any)=>Promise.reject(error))

http.interceptors.response.use((response:AxiosResponse)=>{
    return response.data
},(error:any)=>Promise.reject(error))