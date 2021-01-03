require('dotenv').config()
const Telegraf = require('telegraf');
const initDB = require('./database/database');
const addUser = require('./database/queryes/addUser');

const TOKEN = process.env.TOKEN || '';

const bot = new Telegraf(TOKEN);
initDB();

bot.on('message', async ctx => {
    if (ctx.message.text === 'button') {
        ctx.reply(ctx.message?.text, {
            reply_markup: {
                inline_keyboard: [
                    [{
                        text: '⬅️ Делает что то',
                        callback_data: 'someButton'
                    }],
                    [{
                        text: '⬅️ Другая кнопка',
                        callback_data: 'button'
                    }],
                    [{
                        text: '⬅️ войти в след меню',
                        callback_data: 'nextMenu'
                    }]
                ]
            }
        });
    }
});

bot.on('callback_query', ctx => {
    switch (ctx.update.callback_query?.data) {
        case 'someButton':
            ctx.reply('Ok');
            ctx.answerCbQuery('Кнопка удалена 👌');
            break;
        case 'button':
            ctx.reply('some action');
            ctx.answerCbQuery('👌');
            break;
        case 'nextMenu':
            ctx.editMessageText('След меню', {
                reply_markup: {
                    inline_keyboard: [
                        [{
                            text: '⬅️ Назад',
                            callback_data: 'back'
                        }]
                    ]
                }
            })
            break;
        case 'back':
            ctx.editMessageText('Menu', {
                reply_markup: {
                    inline_keyboard: [
                        [{
                            text: '⬅️ Делает что то',
                            callback_data: 'someButton'
                        }],
                        [{
                            text: '⬅️ Другая кнопка',
                            callback_data: 'button'
                        }],
                        [{
                            text: '⬅️ войти в след меню',
                            callback_data: 'nextMenu'
                        }]
                    ]
                }
            });
            break;
    }
})

bot.launch();

