import {http} from "@/libs/http"

export function getComputerService<T,R=unknown>(){
    return http.post<R,T>("/get/computer/data").then((response:T)=>{
        return response
    }).catch((error:any)=>{
        throw new Error(error)
    })
}