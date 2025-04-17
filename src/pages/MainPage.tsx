import InfoSection from "../components/InfoSection";
import SearchInput from "../components/SearchInput";
import { ipGeolocation } from "../models/ipLocation";

function MainPage() {
    const infoIpAddress : ipGeolocation = {
        ipAddress: "192.212.174.101",
        location: "Brooklyn, NY 10001",
        timezone: "UTC - 05:00",
        isp: "SpaceX Starlink"
    }

    return (<>
        <main className='mx-5 text-center my-10 space-y-7'>
            <h1>IP Address Tracker</h1>
            <SearchInput name="ip-search" placeholder="Search for any IP address or domain"/>
            <InfoSection ipInfo={infoIpAddress} />
        </main>
    </>);
}

export default MainPage;