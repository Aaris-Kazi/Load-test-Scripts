// import options from "./utils/options.js";
// import { webClientGetService } from "./utils/webClientService.js";
// import { options } from "../test";
import options from "../utils/options.js"
import {webClientGetService} from "../utils/webClientService.js"

export { options };

export default function() {
    const endpoint = '/health';
    const payload = { 'key': 'value' };

    webClientGetService(endpoint, null);

}