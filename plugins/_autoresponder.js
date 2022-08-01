let handler = m => m
handler.all = async function(m, { isBlocked }) {
  if(isBlocked) return

  /* - - - - - - - - - - -    - - - - - - - - - - - */
  /* - - - - - - - Hanz AutoResponder - - - - - - - */
  /* - - - - - - - - - - -    - - - - - - - - - - - */

  let regs = /^(aku cinta kamu)$/i
  let isCintaKamu = regs.exec(m.text)
  let cinmu = [
    "❤️",
    "🥰",
    "😍"
  ]
  let cintakamuh = cinmu[Math.floor(Math.random() * cinmu.length)]
  if(isCintaKamu && !m.fromMe) {
    conn.sendMessage(m.chat, {
      react: {
        text: cintakamuh,
        key: m.key,
      }
    })
    setTimeout(() => {
      m.reply(`Aku juga sayang kamu ${cintakamuh}`)
    }, 1000)
  }

  /* - - - - - - - - - - -    - - - - - - - - - - - */
  /* - - - - - - - Hanz AutoResponder - - - - - - - */
  /* - - - - - - - - - - -    - - - - - - - - - - - */

  let salam = /(assalamualaikum|assallamualaikum|assalamu\"alaikum|as\"salamualaikum|assalamu\'alaikum)/i
  let isSalam = salam.exec(m.text)
  let assal = [
    "🥰",
    "😇",
    "😅"
  ]
  let assl = assal[Math.floor(Math.random() * assal.length)]
  if(isSalam && !m.fromMe) {
    conn.sendMessage(m.chat, {
      react: {
        text: assl,
        key: m.key,
      }
    })
    setTimeout(() => {
      m.reply("\n*Wa\'alaikumussalam warahmatullahi wabarokatuhu*\n")
    }, 1000)
  }

  /* - - - - - - - - - - -    - - - - - - - - - - - */
  /* - - - - - - - Hanz AutoResponder - - - - - - - */
  /* - - - - - - - - - - -    - - - - - - - - - - - */


  let hiai = /^(hi|hii|hiii|hi hanz|hii hanz|hiii hanz|hy|halo|hallo|helo|hello|hy hanz|halo hanz|hallo hanz|helo hanz|hello hanz)$/i
  let isAih = hiai.exec(m.text)
  let hiain = [
    "🥰",
    "😇",
    "😅"
  ]
  let hiaine = hiain[Math.floor(Math.random() * hiain.length)]
  if(isAih && !m.fromMe) {
    conn.sendMessage(m.chat, {
      react: {
        text: hiaine,
        key: m.key,
      }
    })
    setTimeout(() => {
      m.reply("Halo 👋🏼")
    }, 1000)
  }
}

export default handler