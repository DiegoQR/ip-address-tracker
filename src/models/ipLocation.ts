export type ip = string

export interface ipGeolocation {
    ipAddress: ip;
    location: string;
    timezone: string;
    isp: string;
}