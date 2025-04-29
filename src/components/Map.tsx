import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet'
import { useEffect } from 'react';

interface Props {
    latitude: number | null;
    longitude: number | null;
    zoom: number;
    loading?: boolean;
}

function Map({latitude, longitude, zoom, loading} : Props) {

    if(loading || !latitude || !longitude ) {
        return <div className='w-full h-[67vh] absolute -z-50 top-75 flex justify-center items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" className='w-30 aspect-square' viewBox="0 0 200 200"><radialGradient id="a9" cx=".66" fx=".66" cy=".3125" fy=".3125" gradientTransform="scale(1.5)"><stop offset="0" stopColor="#000000"></stop><stop offset=".3" stopColor="#000000" stopOpacity=".9"></stop><stop offset=".6" stopColor="#000000" stopOpacity=".6"></stop><stop offset=".8" stopColor="#000000" stopOpacity=".3"></stop><stop offset="1" stopColor="#000000" stopOpacity="0"></stop></radialGradient><circle transform-origin="center" fill="none" stroke="url(#a9)" strokeWidth="15" strokeLinecap="round" stroke-dasharray="200 1000" stroke-dashoffset="0" cx="100" cy="100" r="70"><animateTransform type="rotate" attributeName="transform" calcMode="spline" dur="2" values="360;0" keyTimes="0;1" keySplines="0 0 1 1" repeatCount="indefinite"></animateTransform></circle><circle transform-origin="center" fill="none" opacity=".2" stroke="#000000" strokeWidth="15" strokeLinecap="round" cx="100" cy="100" r="70"></circle></svg>
            </div>
    }

    return (<>
        <MapContainer center={[latitude, longitude]} zoom={zoom} scrollWheelZoom={true} className='w-full h-[67vh] absolute -z-50 top-75'>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[latitude, longitude]}>
            </Marker>
            <MapUpdater latitude={latitude} longitude={longitude} zoom={zoom} />
        </MapContainer>
    </>);
}

function MapUpdater({ latitude, longitude, zoom }: { latitude: number; longitude: number; zoom: number }) {
    const map = useMap();

    useEffect(() => {
        if (latitude !== null && longitude !== null) {
            map.flyTo([latitude, longitude], zoom);
        }
    }, [map, latitude, longitude, zoom]);

    return null;
}


export default Map;