import options from "../utils/options.js"
import { webClientService } from "../utils/webClientService.js"
import config from "../utils/config.js"


export { options };

export default function () {
    const API_V1 = config.API_V1;
    const endpoint = `${API_V1}login/`;
    const payload = { 
        'email': 'aariskazi@gmail.com', 
        'password': '12345' 
    };

    webClientService(endpoint, payload);

}