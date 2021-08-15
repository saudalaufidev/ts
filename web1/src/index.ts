import axios from 'axios'
import {User} from './models/User'

const user=new User({name:"Saud",age:40})

user.set({name:"Saud Said AlAufi"})
console.log(user.get("name"))
console.log(user.get("age"))

user.on('click',()=>{console.log("click 1")})
user.on('click',()=>{ console.log("click 2")})
user.on('save',()=>{console.log("save 1")})

user.trigger('click')
user.trigger('save')

const user1=new User({})
user1.set({name:"Saud Said", age:39})
user1.save()