import { useEffect, useState } from "react";

import { ipGeolocation } from "../models/ipLocation";
import getConfig from "../../config";

import InfoSection from "../components/InfoSection";
import SearchInput from "../components/SearchInput";
import Map from "../components/Map";

import useFetch from "../hooks/useFetch";
import { error } from "console";

function MainPage() {
    const [ipInfo, setIpInfo] = useState<ipGeolocation | null>(null);
    const { get } = useFetch("https://apiip.net/api/");

    useEffect(() => {
        get(`check?accessKey=${getConfig().apiKey}`)
        .then(data => {
            console.log("Data:", data);
        })
        .catch(error => console.error("Error fetching IP info:", error));
    }, []);
        
    const infoIpAddress : ipGeolocation = {
        ipAddress: "192.212.174.101",
        location: "Brooklyn, NY 10001",
        timezone: "UTC - 05:00",
        isp: "SpaceX Starlink",
        latitude: 40.7128,
        longitude: -74.0060,
    }

    return (<>
        <main className='relative'>
            <section className="mx-5 text-center my-10 space-y-7">
                <h1>IP Address Tracker</h1>
                <SearchInput name="ip-search" placeholder="Search for any IP address or domain"/>
                <InfoSection ipInfo={infoIpAddress} />
            </section>
            <Map latitude={infoIpAddress.latitude} longitude={infoIpAddress.longitude} zoom={14}/>
        </main>
    </>);
}

export default MainPage;