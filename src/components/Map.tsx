import { MapContainer, TileLayer, Marker } from 'react-leaflet'

interface Props {
    latitude: number;
    longitude: number;
    zoom: number
}

function Map({latitude, longitude, zoom} : Props) {

    return (<>
        <MapContainer center={[latitude, longitude]} zoom={zoom} scrollWheelZoom={true} className='w-full h-full absolute -z-50 top-75'>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[latitude, longitude]}>
            </Marker>
        </MapContainer>
    </>);
}

export default Map;