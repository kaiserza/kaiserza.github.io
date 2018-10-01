navigator.geolocation.getCurrentPosition(success);

function success(pos){
  var crd = pos.coords;
  console.log(crd);
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
  latitude: 42.7827129,
  longitude: -84.4744707,
  radius: 500 // meters
});

const fenceB = new SquareGeofenceRegion({
  name: 'myfence',
  latitude: 42.7827129,
  longitude: -84.4744707,
  axis: 500 // meters in all 4 directions
})

const fences = [fenceA, fenceB]
const options = {}

navigator.geolocation.watchPosition(({coords}) => {
  for (const fence of fences) {
    const lat = coords.latitude
    const lon = coords.longitude

    if (fence.inside(lat, lon)) {
      // do some logic
    }
    else {
      console.log("meow");
    }
  }
}, console.error, options);