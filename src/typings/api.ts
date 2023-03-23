import {IComputer} from "./computer"

interface IBase{
    err_code:number,
    err_msg:string
}


interface IComputerApi extends IBase{
    data:IComputer[]
}
export type{
    IComputerApi
}