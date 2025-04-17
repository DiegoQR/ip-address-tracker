import InfoSection from "../components/InfoSection";
import SearchInput from "../components/SearchInput";
import Map from "../components/Map";

import { ipGeolocation } from "../models/ipLocation";

function MainPage() {
    const infoIpAddress : ipGeolocation = {
        ipAddress: "192.212.174.101",
        location: "Brooklyn, NY 10001",
        timezone: "UTC - 05:00",
        isp: "SpaceX Starlink"
    }

    return (<>
        <main className='relative'>
            <section className="mx-5 text-center my-10 space-y-7">
                <h1>IP Address Tracker</h1>
                <SearchInput name="ip-search" placeholder="Search for any IP address or domain"/>
                <InfoSection ipInfo={infoIpAddress} />
            </section>
            <Map latitude={51.505} longitude={-0.09} zoom={14}/>
        </main>
    </>);
}

export default MainPage;