const config = {
    // BASE_URL: 'https://example.com/api',
    BASE_URL: 'http://192.168.0.108:8090/',
    HEADERS: {"Content-Type": "application/json"},
    DEBUG: false,
    TIMEOUT: 5000,
    API_V1: 'api/v1/',
    RETRY_ATTEMPTS: 3,
    OK_STATUS: 200,
    RATE: __ENV.RATE || 10
}
export default config;