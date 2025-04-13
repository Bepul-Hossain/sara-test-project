1. clone the repo
2. npm i
3. yarn start:dev

Copy the curl request and paste it to postman. Then send requests.

```
curl --location 'http://localhost:3000/push/send-now' \
--header 'Content-Type: application/json' \
--data '{
    "title": "Promo Reminder",
    "message": "Don'\''t miss our weekend sale!"
}'
```

```
curl --location 'http://localhost:3000/push/schedule' \
--header 'Content-Type: application/json' \
--data '{
    "title": "Reminder notification",
    "message": "Don'\''t miss our offer",
    "scheduleAt": "2025-04-13T16:51:00.000Z"
}'
```

Scheduling Notification Logic:

1. Client Sends Request to Schedule
2. Backend Validates and Queues the Job
3. Redis Holds the Job Until Scheduled Time
4. ConsumerService Executes the Job