const express = require("express");
const app = express();

const pino = require("pino");
let { toBuffer } = require("qrcode");
const path = require("path");
const fs = require("fs-extra");
const { Boom } = require("@hapi/boom");
const PORT = process.env.PORT || 5000;
const MESSAGE =
  process.env.MESSAGE ||
  `
*✅sᴇssɪᴏɴ ᴄᴏɴɴᴇᴄᴛᴇᴅ✅*
*Made With 💜*
______________________________
╔════◇
║『 𝐘𝐎𝐔'𝐕𝐄 𝐂𝐇𝐎𝐒𝐄𝐍 𝗩𝗜𝗥𝗨𝗦𝗜 𝗠𝗕𝗔𝗬𝗔 𝐌𝐃 』
║ You've Completed the First Step
║ to Deploy a Whatsapp Bot.
╚══════════════╝
╔═════◇
║ 『••• 𝗩𝗶𝘀𝗶𝘁 𝗙𝗼𝗿 𝗛𝗲𝗹𝗽 •••』
║❒ 𝐎𝐰𝐧𝐞𝐫: _https://wa.me/254748721079_
║❒ 𝐑𝐞𝐩𝐨: _https://github.com/Vurusian/Virusi-Mbaya-Md_
║❒ 𝐖𝐚𝐆𝐫𝐨𝐮𝐩: _https://chat.whatsapp.com/CMqZ1qwJFKXLP4UKVTnhhL_
║❒ 𝐖𝐚𝐂𝐡𝐚𝐧𝐧𝐞𝐥: _https://whatsapp.com/channel/0029VafL5zUKbYMKza6vAv1V_
║ 💜💜💜
╚══════════════╝ 
______________________________

Don't Forget To Give Star⭐ To My Repo
`;

if (fs.existsSync("/kish_baileys")) {
  fs.emptyDirSync(__dirname + "/kish_baileys");
}

app.use("", async (req, res) => {
  const {
    default: KishWASocket,
    useMultiFileAuthState,
    Browsers,
    delay,
    DisconnectReason,
    makeInMemoryStore,
  } = require("@whiskeysockets/baileys");
  const store = makeInMemoryStore({
    logger: pino().child({ level: "silent", stream: "store" }),
  });
  async function KISH() {
    const { state, saveCreds } = await useMultiFileAuthState(
      __dirname + "/kish_baileys",
    );
    try {
      let Smd = KishWASocket({
        printQRInTerminal: false,
        logger: pino({ level: "silent" }),
        browser: ["Virusi", "KishQrScan", ""],
        auth: state,
      });

      Smd.ev.on("connection.update", async (s) => {
        const { connection, lastDisconnect, qr } = s;
        if (qr) {
          res.end(await toBuffer(qr));
        }

        if (connection == "open") {
          await delay(3000);
          let user = Smd.user.id;
          let CREDS = fs.readFileSync(
            __dirname + "/kish_baileys/creds.json",
          );
          var Scan_Id = Buffer.from(CREDS).toString("base64");
          // res.json({status:true,Scan_Id })
          console.log(`
====================  SESSION ID  ==========================                   
SESSION-ID ==> ${Scan_Id}
-------------------   SESSION CLOSED   -----------------------
`);

          let msgsss = await Smd.sendMessage(user, {
            text: `Virusi;;;${Scan_Id}`,
          });
          await Smd.sendMessage(user, { text: MESSAGE }, { quoted: msgsss });
          await delay(1000);
          try {
            await fs.emptyDirSync(__dirname + "/kish_baileys");
          } catch (e) {}
        }

        Smd.ev.on("creds.update", saveCreds);

        if (connection === "close") {
          let reason = new Boom(lastDisconnect?.error)?.output.statusCode;
          // console.log("Reason : ",DisconnectReason[reason])
          if (reason === DisconnectReason.connectionClosed) {
            console.log("Connection closed!");
            // KISH().catch(err => console.log(err));
          } else if (reason === DisconnectReason.connectionLost) {
            console.log("Connection Lost from Server!");
            //  KISH().catch(err => console.log(err));
          } else if (reason === DisconnectReason.restartRequired) {
            console.log("Restart Required, Restarting...");
            KISH().catch((err) => console.log(err));
          } else if (reason === DisconnectReason.timedOut) {
            console.log("Connection TimedOut!");
            // KISH().catch(err => console.log(err));
          } 
        }
      });
    } catch (err) {
      console.log(err);
      await fs.emptyDirSync(__dirname + "/kish_baileys");
    }
  }

  KISH().catch(async (err) => {
    console.log(err);
    await fs.emptyDirSync(__dirname + "/kish_baileys");

    //// MADE BY KISH INC - 2024
  });
});

app.listen(PORT, () =>
  console.log(`Virusi-Qr Server Running on Port http://localhost:${PORT}`),
);
