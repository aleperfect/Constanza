let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
  if (!(isAdmin || isOwner)) {
  global.dfail('admin', m, conn)
  throw false
  }
  let pesan = args.join` `
  let oi = `*𝙼𝙴𝙽𝚂𝙰𝙹𝙴:𝗠𝝠𝗡𝗚 𝗕𝝝𝗧 𝗧𝗘 𝗜𝗡𝗩𝝝𝗖𝝠* ${pesan}`
  let teks = `*⺀🥵Buen@s días, tardes y noches pero no mas bueno que yo⺀*\n\n❄️ ${oi}\n\n❄️ *@constanza_ff.24:*\n`
  for (let mem of participants) {
  teks += `🫎🔮 @${mem.id.split('@')[0]}\n`}
  teks += `➤ 𝐌𝐚𝐧𝐠 𝐛𝐨𝐭`
  conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
  }
  handler.help = ['tagall <mesaje>','invocar <mesaje>']
  handler.tags = ['group']
  handler.command = /^(tagall|invocar|invocacion|todos|invocación|aviso|despierten)$/i
  handler.admin = true
  handler.group = true
  export default handler