import http from 'k6/http';
import config from './config.js';
import { check} from 'k6';

const webClientService = (endpoint, payloadobj = null, token = null) => {
    const payload = payloadobj ? payloadobj : {};
    const headers = {
        'Content-Type': 'application/json'
    };

    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }

    if (config.DEBUG == true) {
        console.log(`Sending request to ${config.BASE_URL}${endpoint}`);
        console.log(`Payload: ${JSON.stringify(payload)}`);
    }

    const response = http.post(`${config.BASE_URL}${endpoint}`, JSON.stringify(payload), { headers });

    if (response.status != config.OK_STATUS) {
        console.log(`Response: ${response.body}`);
        console.log(`Response: ${response.status}`);
    }
    
    check(response, {
        'is status 200': (r) => r.status === config.OK_STATUS
    });
    return response;
}

const webClientGetService = (endpoint, token = null) => {
    const headers = {
        'Content-Type': 'application/json'
    };

    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }

    if (config.DEBUG == true) {
        console.log(`Sending request to ${config.BASE_URL}${endpoint}`);
        console.log(`Payload: ${JSON.stringify(payload)}`);
    }

    const response = http.get(`${config.BASE_URL}${endpoint}`, { headers });

    if (response.status != config.OK_STATUS) {
        console.log(`Response: ${response.body}`);
        console.log(`Response: ${response.status}`);
    }
    
    check(response, {
        'is status 200': (r) => r.status === config.OK_STATUS
    });
    return response;
}

export { webClientService, webClientGetService };