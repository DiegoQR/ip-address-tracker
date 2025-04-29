import { ipGeolocation } from "../models/ipLocation";
import InfoDisplay from "./InfoDisplay";

function InfoSection({ ipInfo }: { ipInfo: ipGeolocation }) {
    return (<>
        <section className="flex flex-col gap-3 bg-white rounded-2xl text-black py-7 shadow-xl px-10 md:grid md:grid-cols-4 md:py-15 md:divide-x md:divide-dark-gray">
            <InfoDisplay label="IP ADDRESS">{ipInfo.ipAddress}</InfoDisplay>
            <InfoDisplay label="LOCATION">{ipInfo.location}</InfoDisplay>
            <InfoDisplay label="TIMEZONE">{ipInfo.timezone}</InfoDisplay>
            <InfoDisplay label="ISP">{ipInfo.isp}</InfoDisplay>
        </section>
    </>);
}

export default InfoSection;