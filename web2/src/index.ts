import {User} from './models/User'

const user = new User({name:"Saud",age:40})
console.log(user.get('name'))

user.on('save', () => {console.log("save 1 on events")})
user.trigger('save')

// const user=new User({name:"Saud",age:40})
// user.set({name:"Saud Said AlAufi"})
// console.log(user.get("name"))
// console.log(user.get("age"))

// user.events.on('click',()=>{console.log("click 1")})
// user.events.on('click',()=>{ console.log("click 2")})
// user.events.on('save',()=>{console.log("save 1")})
// user.events.trigger('click')
// user.events.trigger('save')

// const user1=new User({id:5})
// user1.set({name:"Saud Said", age:39})
// user1.save()