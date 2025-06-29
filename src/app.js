require("module-alias/register");

const app = require("express")();
require("./router")(app);

const mariadb = require("@common/mariadb");
const database = require("@common/database");
const dressing = require("@common/dressing");
const redis = require("@common/redis");

database.init();
dressing.init();
mariadb.init();
redis.init();

require("@dispatcher/room")();

const logger = require("@common/logger");
const config = require("@config/host");

app.listen(config.dispPort, () => {
    logger.info(`Dispatcher server started PORT=${config.dispPort}`);
});