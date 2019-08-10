steps::
1. npm install
2. node server.js
3. Hit the below CURL request on postman to get the expected output::

GET /weather/getWeatherReportForToday HTTP/1.1
Host: localhost:3001
User-Agent: PostmanRuntime/7.15.2
Accept: */*
Cache-Control: no-cache
Postman-Token: a879bc1a-eacd-4671-833b-2264fdfe35a2,58282e97-94ae-42d7-b8f8-411f7f85fabe
Host: localhost:3001
Cookie: connect.sid=s%3ATHtCAorJGrIGL1sHDfEI_yo0mEhtvNgC.ckVK72EhoJGfZxd5K3fwdRs0TTT%2Fp48t4rlz35Z4QeE
Accept-Encoding: gzip, deflate
Connection: keep-alive
cache-control: no-cache

4. To enable data entry to database(in your local mongodb), uncomment the block of code in src/modules/weather-report/weather-report-coontroller.js and db variable declaration in server.js file.

5. npm test to run test cases
