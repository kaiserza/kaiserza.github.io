navigator.geolocation.getCurrentPosition(success);

function success(pos){
  var crd = pos.coords;
  var latitude1 = pos.coords.latitude;
  var longitude1 = pos.coords.longitude;
  console.log(latitude1 + " , " + longitude1);
  // console.log(crd);
  initMap(latitude1, longitude1);
}

function initMap(lat1, lon1){
  // console.log(lat1 + "..." + lon1);
  var myLatLng = {lat: lat1, lng: lon1}; 
  var kresgeLatLng = {lat: 42.728344, lng: -84.474513};
  var rockLatLng = {lat: 42.728130, lng: -84.477567};
  var broadLatLng = {lat: 42.732892, lng: -84.476331};
  var wellsLatLng = {lat: 42.727679, lng: -84.481677};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: myLatLng
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    label: "YOU ARE HERE",
    map: map,
    title: 'Hello World!'
  });

  var markerKresge = new google.maps.Marker({
    position: kresgeLatLng,
    label: "LOCKER E-42",
    map: map,
    title: 'Hello World!'
  });

  var markerRock = new google.maps.Marker({
    position: rockLatLng,
    label: "number",
    map: map,
    title: 'Hello World!'
  });

  var markerBroad = new google.maps.Marker({
    position: broadLatLng,
    label: "number",
    map: map,
    title: 'Hello World!'
  });

  var markerWells = new google.maps.Marker({
    position: wellsLatLng,
    label: "number",
    map: map,
    title: 'Hello World!'
  });

}

class CircularGeofenceRegion {
  constructor(opts) {
    Object.assign(this, opts)
  }

  inside(lat2, lon2) {
    const lat1 = this.latitude
    const lon1 = this.longitude
        const R = 63710; // Earth's radius in m

    return Math.acos(Math.sin(lat1)*Math.sin(lat2) + 
                     Math.cos(lat1)*Math.cos(lat2) *
                     Math.cos(lon2-lon1)) * R < this.radius;
  }
}

class SquareGeofenceRegion {
  constructor(opts) {
    Object.assign(this, opts)
  }

  inside(lat, lon) {
    const x = this.latitude
    const y = this.longitude
    const { axis } = this

    return lat > (x - axis) && 
           lat < (x + axis) &&
           lon > (y - axis) &&
           lon < (y + axis)
  }
}

const fenceA = new CircularGeofenceRegion({
  name: 'myfence',
  latitude: 42.728344,
  longitude: -84.474513,
  radius: 10 // meters
});

const fenceROCK = new CircularGeofenceRegion({
  name: 'theRock',
  latitude: 42.728130,
  longitude: -84.477567,
  radius: 10 // meters
})

const fenceBROAD = new CircularGeofenceRegion({
  name: 'theBroad',
  latitude: 42.732892,
  longitude: -84.476331,
  radius: 10 // meters
})

const fenceSTARB = new CircularGeofenceRegion({
  name: 'starbucksWells',
  latitude: 42.727679,
  longitude: -84.481677,
  radius: 10 //meters
})

const fenceB = new SquareGeofenceRegion({
  name: 'myfence',
  latitude: 42.7827129,
  longitude: -84.4744707,
  axis: 500 // meters in all 4 directions
})

const fences = [fenceA];
const fences2 = [fenceROCK];
const fences3 = [fenceBROAD];
const fences4 = [fenceSTARB];
const options = {
         enableHighAccuracy: true,
     }

navigator.geolocation.watchPosition(({coords}) => {

  for (const fence of fences) {
    const lat = coords.latitude;
    const lon = coords.longitude;

    if (fence.inside(lat, lon)) {
      window.alert("KRESGE");
      console.log("KRESGE");
    }
    else {
      console.log("meow");
    }
  }

  for (const fence of fences2) {
      const lat = coords.latitude;
      const lon = coords.longitude;

      if (fence.inside(lat, lon)) {
        window.alert("ROCK");
        console.log("ROCK");
      }
  }

  for (const fence of fences3) {
      const lat = coords.latitude;
      const lon = coords.longitude;

      if (fence.inside(lat, lon)) {
        window.alert("BROAD");
        console.log("BROAD");
      }
  }

  for (const fence of fences4) {
      const lat = coords.latitude;
      const lon = coords.longitude;

      if (fence.inside(lat, lon)) {
        window.alert("STARBUCKS");
        console.log("STARBUCKS");
      }
  }

}, console.error, options);







//Google Maps API Key = AIzaSyDHRtKtM_XoeLtCf8gyVeHwNHnH_HjJhXI