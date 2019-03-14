**Установка и запуск**
1. Скачать и установить Node.js `https://nodejs.org/en/`
2. В папке проекта выполнить команду `npm install`
3. Запустить программу командой `node app.js`



**Структура проекта:**
- api
   - configs
      - config.json
   - roures
      - uin.js
   - controllers
      - uin.js
   - models
      - db.json
app.js



**HTTP Запросы**

Общий URL: `address:port/api/uin/:phone_number`

Пример: `localhost:3000/api/uin/7058155533`

HTTP GET:
1. `localhost:3000/api/uin/7058155533` -> `060412456784`
2. `localhost:3000/api/uin/77058155533` -> `050214785634`
3. `localhost:3000/api/uin/87058155533` -> `080445671047`

4. `localhost:3000/api/uin/87058155545` -> `-2`
5. `localhost:3000/api/uin/87058155512` -> `-2`

6. `localhost:3000/api/uin/87278155533` -> `-2`
7. `localhost:3000/api/uin/77058152133` -> `-2`
8. `localhost:3000/api/uin/7054555533` -> `-2`

9. `localhost:3000/api/uin/87778151433` -> `-2`
10. `localhost:3000/api/uin/77058123433` -> `-2`
11. `localhost:3000/api/uin/7058150965` -> `-2`
12. `localhost:3000/api/uin/87058150246` -> `-2`

13. `localhost:3000/api/uin/+77058155512` -> `-1`
14. `localhost:3000/api/uin/+7705 8155512` -> `-1`
15. `localhost:3000/api/uin/+7 7058155512` -> `-1`

16. `localhost:3000/api/uin/8705815551245` -> `-3`
17. `localhost:3000/api/uin/123456789` -> `-3`
