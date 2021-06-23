const db = require('mongoose');

db.Promise = global.Promise;

//'mongodb+srv://db_user_platzivideos:kshatriya1@cluster0.bczdc.mongodb.net/telegrom?retryWrites=true&w=majority'
async function connect(url) {
   await db.connect(url, {
    useNewUrlParser: true,
});

    console.log('[db] Conectada con exito');
}

module.exports = connect;
