@@ -2,18 +2,11 @@ const Telegraf = require('telegraf')
const Extra = require('telegraf/extra')
const fs = require('fs')

/*const Markup = require('telegraf/markup')

const keyboard = Markup.inlineKeyboard([
  Markup.urlButton('❤️', 'http://telegraf.js.org'),
  Markup.callbackButton('Мобильная разработка', 'delete')
])*/

const bot = new Telegraf("token");


const bot = new Telegraf("783491645:AAGp_rUoPcyRDfgfGZzsXIzJ8HtXbpJThyk");

//bot.on('message', (ctx) => ctx.telegram.sendCopy(ctx.from.id, ctx.message, Extra.markup(keyboard)))
bot.start((ctx) => ctx.reply('Привет! Я бот IT_camp и Profcamp версия 0.1! Рад познакомиться! Сейчас ты можешь узнать, как выглядит твой инвестор или ментор. Для этого просто пришли мне его имя. Будь уважителен - используй полное имя и заглавную первую букву.'))
bot.help((ctx) => ctx.reply('Пришли мне стикер'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
