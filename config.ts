interface Config {
    apiKey: string;
    apiUrl: string;
    port: number;
    mode: 'development' | 'production';
}

function getConfig(): Config {
    const env = import.meta.env;
    const config : Config = {
        apiKey: env.VITE_API_KEY || '',
        apiUrl: env.VITE_API_URL || 'https://api.ipgeolocation.io/ipgeo',
        port: parseInt(env.VITE_PORT || '3000', 10),
        mode: env.VITE_MODE === 'production' ? 'production' : 'development'
    };
    return config;
}

export default getConfig;