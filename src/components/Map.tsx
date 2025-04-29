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
        return <div className='w-full h-[60vh] absolute -z-50 top-75'>Loading...</div>
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