import options from "./utils/options.js";
import { webClientGetService } from "./utils/webClientService.js";

export { options };

export default function() {
    const endpoint = '/';
    const payload = { 'key': 'value' };

    webClientGetService(endpoint, null);

}