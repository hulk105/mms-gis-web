import {useEffect, useRef, useState} from 'react';
import mapboxgl from 'mapbox-gl';
import './map.scss';

mapboxgl.accessToken = 'pk.eyJ1IjoiYXNkNzI2IiwiYSI6ImNrbDZ4dW5lbTJtNm4zMG1zZjhhMmo1d28ifQ.Hy6v6YxQfGTapr-SsS4eqQ'

const Map = () => {
  const mapContainer = useRef(null);

  const [lng, setLng] = useState(5)
  const [lat, setLat] = useState(34);
  const [zoom, setZoom] = useState(1.5);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    });
    map.on('move', () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2));
    });

    return () => map.remove();
  }, []);

  return (
      <div>
        <div className='sidebar'>
          Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        </div>
        <div className="map-container" ref={mapContainer}/>
      </div>
  )
}

export default Map;