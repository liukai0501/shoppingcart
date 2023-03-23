import {watchEffect,computed,ref,Ref} from "vue";
import {getComputerService} from "@/services/getComputerService";
import {IComputer, IComputerApi} from "@/typings";
import {ComputedRef} from "vue";
import {Router,useRouter} from "vue-router";
import router from "@/router";

export function useComputer(){
    const router:Router = useRouter()
    let computerArray : Ref<IComputer[]>= ref([])
    watchEffect(async ()=>{
        const response = await getComputerService<IComputerApi,unknown>()
        response.data.forEach((object:IComputer)=>computerArray.value.push(object))
        console.log(computerArray)
    })
    const changeCount = (type:string,uid:string):void=>{
        computerArray.value.forEach((object:IComputer)=>{
            if(object.productId === uid){
                switch (type){
                    case "reduce":
                        if(object.productCount > 0){
                            object.productCount--
                        }
                        break
                    default:
                        object.productCount++
                }
            }
        })
    }
    const changeChecked = (uid:string)=>{
        computerArray.value.forEach((object:IComputer)=>{
            if(object.productId === uid){
                object.checked = !object.checked
            }
        })
    }
    const allPrice: ComputedRef<number> = computed(()=>{
        return computerArray.value.reduce((pre:number,curr:IComputer)=>{
            return pre += (curr.checked === true? curr.productCount*curr.productPrice:0)
        },0)
    })
    const removeProduct = (pid:string):void =>{
        let status:boolean = confirm("确定要删除当前产品吗？")
        if(status){
            computerArray.value = computerArray.value.filter((object:IComputer)=>{
                return object.productId != pid
            })
        }
    }
    const closeAccount = ():void => {
        let status:boolean = confirm("确定要结算吗？")
        if(status){
            if(allPrice.value > 0){
                router.push("/address")
                return
            }
            alert("请选择商品后在结算！")
        }
    }

    return {
        computerArray,changeCount,allPrice,changeChecked,closeAccount,removeProduct
    }
}