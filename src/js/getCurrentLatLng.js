   export const getCurrentLatLng=()=>{
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position){
            localStorage.setItem("lat", position.coords.latitude);
            localStorage.setItem("lng", position.coords.longitude);
            console.log("get current Location");
        }, (error) => {
            console.log(error);
        }, {
            enableHighAccuracy: false,
            timeout: 600000,
            maximumAge: 1000000
        });
    
    } else {
        console.log("Geolocation is not supported by this browser.");
    
    }
}
   
