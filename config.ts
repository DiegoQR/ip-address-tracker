interface Config {
    apiKey: string;
    apiUrl: string;
    port: number;
    mode: 'development' | 'production';
}

function getConfig(): Config {
    const env = process.env;
    const config : Config = {
        apiKey: env.API_KEY || '',
        apiUrl: env.API_URL || '',
        port: parseInt(env.PORT || '3000', 10),
        mode: env.NODE_ENV === 'production' ? 'production' : 'development'
    };
    return config;
}

export default getConfig;