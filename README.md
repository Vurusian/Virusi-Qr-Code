<h1 align="center"> VIRUSI-MBAYA-MD QR SCANNER </h1>

  <html>
   <body>
  <p align="center">  
  <a aria-label="FORK" href="https://github.com/Vurusian/Virusi-Qr-Code/fork" target="_blank">
  </a>
  </p>
    <p align="center"><img src="https://profile-counter.glitch.me/{Vurusian}/count.svg" alt="Virusi :: Visitor's Count" /></p>
     
     
  </body>
</html>


## Deployment Methods
---
1.  ***Click [`FORK`](https://github.com/Vurusian/Virusi-Qr-Code/fork) and `Star ⭐ Repository` if you get help from repo.***
2.  ***Deploy on [`HEROKU`](https://dashboard.heroku.com/new?template=https://github.com/Vurusian/Virusi-Qr-Code).***
3.  ***Deploy on [`REPLIT`](https://replit.com/github.com/Vurusian/Virusi-Qr-Code).***
4. ***Deploy on [`RENDER`](https://dashboard.render.com/login).***
```
RENDER PROCESS:
    1: Click "NEW".
    2: Select "Web Service".
    3: Click "Build and deploy from a Git repository".
    4: Now Choose this forked git repo from list.
    5: And JUST CLICK "Connect". 
```




- Dependencies
```sh
    "@hapi/boom": "^10.0.1",
    "github:mouricedevs/Baileys",      
    "pino": "^8.1.0",
    "express": "^4.18.2",
    "qrcode": "latest"
```


- WASocket Options
```js
    let Smd =GiftedWASocket({ 
        printQRInTerminal: false,   // make it false if you're using web
        logger: pino({ level: "silent" }),     // make it silent to prevent baileys buffering
        browser: ["Virusi", "GiftedQrScan", ""],  // awailable browsers : Gifted, Virusi, ubuntu, macOS, baileys.
        auth: state 
    });
```



- Getting Session in BASE64
```js
    let CREDS = fs.readFileSync(__dirname + '/gifted_baileys/creds.json')
    var Scan_Id = Buffer.from(CREDS).toString('base64')    // converting into Base64 ---- IMPLEMENT ACCOEDING TO YOUR NEED
    // res.json({status:true,Scan_Id })
```




- Environment variable
```js
    const PORT = process.env.PORT ||  5000
    const MESSAGE = process.env.MESSAGE || "Don't Provide your session id to someone!" 
    //   Set Confirmation Message According to your need! 
```









## MADE WITH ❤️ BY VURUSIAN:
 <a href="https://github.com/Vurusian"><img src="https://github.com/Vurusian.png" width="200" height="200" alt="Vurusian"/></a>

 ### Credits To:
 [Bro Gifted](https://github.com/mouricedevs)
