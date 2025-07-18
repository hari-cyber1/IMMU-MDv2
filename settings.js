const fs = require('fs')

// Optional: Load .env if available
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname + '/.env' })

// Global bot settings
global.SESSION_ID = process.env.SESSION_ID || ''
global.PREFIX = process.env.PREFIXZ || '.'
global.mode = process.env.MODE || 'public'
global.botname = process.env.BOT_NAME || 'IMMU MD'
global.ownernumber = process.env.OWNER_NUMBER || '919142294671'
global.antidelete = process.env.ANTIDELETE || 'private'
global.statusemoji = (process.env.STATUS_EMOJI || "🧡,💚,🔥,✨,❤️,🥰,😎").split(',')
global.antiLinkGroups = {}; 
global.timezones = process.env.TIMEZONE || "Pakistan/Karachi"

// Global runtime features with default boolean fallback
global.autotyping = process.env.AUTO_TYPING === 'false' // boolean
global.autorecording = process.env.AUTO_RECORDING === 'false'
global.autoread = process.env.AUTO_READ === 'false'
global.autoreact = process.env.AUTO_REACT === 'false'
global.alwaysonline = process.env.ALWAYS_ONLINE === 'false'
global.autoviewstatus = process.env.AUTO_STATUS_VIEW === 'true'
global.autoreactstatus = process.env.AUTO_STATUS_REACT === 'true'
global.antigroupmention = process.env.ANTI_GROUP_MENTION === 'false'

// Watch for changes and reload this file if updated
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(`🔁 Reloaded global settings: '${__filename}'`)
  delete require.cache[file]
  require(file)
})
