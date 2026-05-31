import config from './config.js';

const options = {
    scenarios: {
        open_model: {
            executor: 'constant-arrival-rate',
            rate: config.RATE,
            timeUnit: '1s',
            duration: '20s',
            preAllocatedVUs: Math.floor(config.RATE / 3)
        }
    }
};

export default options;