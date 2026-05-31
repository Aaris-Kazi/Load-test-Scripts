const config = {
    BASE_URL: 'https://clauseguard.siddx.in',
    HEADERS: {"Content-Type": "application/json"},
    DEBUG: false,
    TIMEOUT: 5000,
    RETRY_ATTEMPTS: 3,
    OK_STATUS: 200,
    RATE: __ENV.RATE || 10 
}
export default config;