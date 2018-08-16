export default function(lat1,lng1,lat2,lng2) {
    const R = 6371; // Radius of the earth in km
    const dLat = deg2rad(lat2-lat1);  // deg2rad below
    const dLon = deg2rad(lng2-lng1); 
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ; 
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    let d = R * c; // Distance in km


    let sdLat = (lat2-lat1);
    let sdLng = (lng2-lng1);

    // let d2 =  Math.floor( Math.sqrt(Math.pow(sdLat,2)+Math.pow(sdLng,2)))*6371;
    


    return d;
  }
 function deg2rad(deg) {
    return deg * (Math.PI/180)
  }