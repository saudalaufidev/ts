import {User} from './user';
import {Org} from './Org'
import {CustomMap} from './CustomMap'

const user = new User();
const org=new Org()
const map=new CustomMap("map")

setTimeout(()=>{
 map.addMarker(user)
 map.addMarker(org)
},300)



