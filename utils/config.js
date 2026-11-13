const config = {
    // BASE_URL: 'https://example.com/api',
    BASE_URL: 'https://network:8090/',
    HEADERS: {"Content-Type": "application/json"},
    DEBUG: true,
    TIMEOUT: 5000,
    RETRY_ATTEMPTS: 3,
    OK_STATUS: 200,
    RATE: __ENV.RATE || 10 
}
export default config;