import { ipGeolocation } from "../models/ipLocation";
import InfoDisplay from "./InfoDisplay";

function InfoSection({ ipInfo }: { ipInfo: ipGeolocation }) {
    return (<>
        <section className="bg-white rounded-2xl text-black py-7 space-y-3 shadow-xl">
            <InfoDisplay label="IP ADDRESS">{ipInfo.ipAddress}</InfoDisplay>
            <InfoDisplay label="LOCATION">{ipInfo.location}</InfoDisplay>
            <InfoDisplay label="TIMEZONE">{ipInfo.timezone}</InfoDisplay>
            <InfoDisplay label="ISP">{ipInfo.isp}</InfoDisplay>
        </section>
    </>);
}

export default InfoSection;