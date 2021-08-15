import axios,{AxiosPromise}  from 'axios';
interface HasId{
    id?:number
}
export class Sync<T extends HasId>{
    constructor(public apiUrl: string){}
    fetch(id:number):AxiosPromise{        
       return axios.get(this.apiUrl + `/${id}`)
    }
    save(data:T):AxiosPromise{
        const {id}=data
        if(id){
           return axios.put(this.apiUrl+`/${id}`,data)
        }else {
            return axios.post(this.apiUrl,data)
        }
    }
}