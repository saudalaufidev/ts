interface Loc{
    location:{
        lat:number,
        lng:number
    }
}
export class CustomMap{
    private googleMap:google.maps.Map;
    constructor(private divId:string){
        this.googleMap=new google.maps.Map(document.getElementById(this.divId),{
            zoom: 1,
            fullscreenControl:true,
            center:{
                lat:0,
                lng:0
            }
        });
    }
    addMarker(loc:Loc){
        new google.maps.Marker({
            map:this.googleMap, //which map object to use
            position:{
                lat:loc.location.lat,
                lng:loc.location.lng
            }
        })
    }
}