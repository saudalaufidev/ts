    
export interface Mappable {
    location:{
        lat:number,
        lng:number
    },
    markerInfo():string
}
export class CustomMap{
    private googleMap:google.maps.Map;
    private center={ 
        lat:22.949911137243223,
        lng:57.293402347370275
    }
    private zoom=1;
    constructor(private divId:string){
        this.googleMap=new google.maps.Map(document.getElementById(this.divId),{
            zoom: this.zoom,
            fullscreenControl:true,
            center: this.center
        });
    }
    addMarker(mappable:Mappable){
        const marker=new google.maps.Marker({
            map:this.googleMap, //which map object to use
            position:{
                lat:mappable.location.lat,
                lng:mappable.location.lng
            }
        });
        marker.addListener('click',()=>{
            const infowindow = new google.maps.InfoWindow({
                content: mappable.markerInfo(),
              });
              infowindow.open(this.googleMap,marker)
        })

    }
}