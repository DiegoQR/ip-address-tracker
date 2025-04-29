import { useEffect, useState } from "react";

import { ipGeolocation } from "../models/ipLocation";
import getConfig from "../../config";

import InfoSection from "../components/InfoSection";
import SearchInput from "../components/SearchInput";
import Map from "../components/Map";

import useFetch from "../hooks/useFetch";

function MainPage() {
    const [ip, setIp] = useState<string>('');
    const [ipInfo, setIpInfo] = useState<ipGeolocation>({ipAddress: 'N/A', location: 'N/A', timezone: 'N/A', isp: 'N/A', latitude: null, longitude: null});
    const { get, loading } = useFetch(`${getConfig().apiUrl}?apiKey=${getConfig().apiKey}`);

    useEffect(() => {
        get(`&fields=country_name,city,district,latitude,longitude,isp,time_zone`)
        .then((data: any) => {
            const ipGeolocationData: ipGeolocation = dataToIPGeolocation(data);
            setIpInfo(ipGeolocationData)
            setIp(data.ip)
        })
        .catch(error => console.error("Error fetching IP info:", error));
    }, []);

    function dataToIPGeolocation(data: any): ipGeolocation {
        return {
            ipAddress: data.ip,
            location: `${data.city}, ${data.country_name}, ${data.district}`,
            timezone: `UTC ${data.time_zone.offset < 0 ? String(data.time_zone.offset) : `+${String(data.time_zone.offset)}`}:00`,
            isp: data.isp,
            latitude: parseFloat(data.latitude),
            longitude: parseFloat(data.longitude),
        }
    }

    function handleSearchSubmit(e: React.FormEvent) {
        e.preventDefault();
        const ipAddress = ip;
        if (ipAddress) {
            get(`&ip=${ipAddress}&fields=country_name,city,district,latitude,longitude,isp,time_zone`)
            .then((data :any) => {
                const ipGeolocationData: ipGeolocation = dataToIPGeolocation(data);
                setIpInfo(ipGeolocationData)
                setIp(data.ip)
            })
            .catch(error => console.error("Error fetching IP info:", error));
        }
    }

    return (<>
        <main className='relative'>
            <section className="mx-5 text-center my-10 space-y-7">
                <h1>IP Address Tracker</h1>
                <SearchInput 
                    name="ip-search" 
                    placeholder="Search for any IP address or domain"
                    value={ip}
                    onChange={(e) => setIp(e.target.value)}
                    onSubmit={(e) => handleSearchSubmit(e)}
                />
                <InfoSection ipInfo={ipInfo} />
            </section>
            <Map latitude={ipInfo.latitude} longitude={ipInfo.longitude} loading={loading} zoom={14}/>
            
        </main>
    </>);
}

export default MainPage;