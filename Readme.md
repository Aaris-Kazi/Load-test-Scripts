# K6 Scripts to Loadtest your APIs

## command to run

    RATE=100 k6 run --summary-trend-stats="avg, min, max, p(50), p(90), p(95), p(99)" test.js

## Command to copy your file in SSH

    scp -r -P 9811 K6_Scripters aaris@192.168.0.1:/home/user