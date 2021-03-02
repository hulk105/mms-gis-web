import {useEffect, useRef, useState} from 'react';
import mapboxgl from 'mapbox-gl';
import './map.scss';

mapboxgl.accessToken = 'pk.eyJ1IjoiYXNkNzI2IiwiYSI6ImNrbDZ4dW5lbTJtNm4zMG1zZjhhMmo1d28ifQ.Hy6v6YxQfGTapr-SsS4eqQ'

const defaultLongitude = 32.9;
const defaultLatitude = 49.8;
const defaultZoom = 7;

const Map = ({pollution}) => {

    const mapContainer = useRef(null);
    const [lng, setLng] = useState(defaultLongitude)
    const [lat, setLat] = useState(defaultLatitude);
    const [zoom, setZoom] = useState(defaultZoom);

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

        map.on('load', () => {
            pollution.map(group => drawGroup(map, group, '#ed1c24'));
        });

        return () => map.remove();
    }, []);

    return (
        <div className='global-map'>
            <div className='sidebar'>
                Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
            </div>
            <div className="map-container" ref={mapContainer}/>
        </div>
    )
}

function drawGroup(map, group, color) {
    // it is necessary to add the last point in the end
    // to render closed polygon
    const coordinates = group.points.map(point => [
        parseFloat(point.x),
        parseFloat(point.y)
    ]).concat([[parseFloat(group.points[0].x),
        parseFloat(group.points[0].y)]]);

    map.addSource((group.id).toString(), {
        'type': 'geojson',
        'data': {
            'type': 'Feature',
            'geometry': {
                'type': 'Polygon',
                'coordinates': [coordinates]
            }
        }
    });

    map.addLayer({
        'id': (group.id).toString(),
        'type': 'line',
        'source': (group.id).toString(),
        'paint': {
            'line-color': color,
        }
    });
}

export default Map;
