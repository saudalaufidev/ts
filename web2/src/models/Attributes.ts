export class Attributes<T>{
    constructor(private data:T) {}
    // change get from methode to function to fix undefine error due to this issue
    get=<K extends keyof T>(key:K):T[K]=>{
        return this.data[key]
    }
    set(update:T):void{
        Object.assign(this.data, update)
    }  
}