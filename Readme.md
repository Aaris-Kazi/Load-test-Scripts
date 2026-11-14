# K6 Scripts to Loadtest your APIs

## command to run

    RATE=100 k6 run --summary-trend-stats="avg, min, max, p(50), p(90), p(95), p(99)" test.js

## Command to copy your file in SSH

    scp -r -P 9811 K6_Scripters aaris@192.168.0.1:/home/user


## Output
```
PS C:\Users\aaris\Documents\js\K6_Scripters\breakfast> k6 run .\login.js

         /\      Grafana   /‾‾/
    /\  /  \     |\  __   /  /
   /  \/    \    | |/ /  /   ‾‾\
  /          \   |   (  |  (‾)  |
 / __________ \  |_|\_\  \_____/


     execution: local
        script: .\login.js
        output: -

     scenarios: (100.00%) 1 scenario, 3 max VUs, 50s max duration (incl. graceful stop):
              * open_model: 10.00 iterations/s for 20s (maxVUs: 3, gracefulStop: 30s)

WARN[0000] Insufficient VUs, reached 3 active VUs and cannot initialize more  executor=constant-arrival-rate scenario=open_model


  █ TOTAL RESULTS

    checks_total.......: 51      2.475304/s
    checks_succeeded...: 100.00% 51 out of 51
    checks_failed......: 0.00%   0 out of 51

    ✓ is status 201

    HTTP
    http_req_duration..............: avg=1.08s min=718.82ms med=1.07s max=1.44s p(90)=1.25s p(95)=1.3s
      { expected_response:true }...: avg=1.08s min=718.82ms med=1.07s max=1.44s p(90)=1.25s p(95)=1.3s
    http_req_failed................: 0.00%  0 out of 51
    http_reqs......................: 51     2.475304/s

    EXECUTION
    dropped_iterations.............: 150    7.280305/s
    iteration_duration.............: avg=1.12s min=718.82ms med=1.07s max=2.15s p(90)=1.31s p(95)=1.69s
    iterations.....................: 51     2.475304/s
    vus............................: 3      min=2       max=3
    vus_max........................: 3      min=3       max=3

    NETWORK
    data_received..................: 48 kB  2.3 kB/s
    data_sent......................: 9.7 kB 470 B/s

```