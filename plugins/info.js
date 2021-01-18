let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
╠═〘 INFO BOT 〙 ═
╠➥ Dibuat dengan bahasa javascript via NodeJs
╠➥ Rec: Miqdad  Mods
╠➥ Script: @thelfd.06
║
╠➥ Instagram: @thelfd.06
╠➥ YouTube:  Miqdad Mods
║
╠═〘 DONASI 〙 ═
╠➥ Pulsa : _62853263644
║
║>Request? Wa.me/6285326364468
║
╠═〘 Miqdad Mods Bot 〙 ═
`.trim(), m)
}
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

