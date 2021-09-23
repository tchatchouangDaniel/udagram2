"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const config_1 = require("./config/config");
exports.sequelize = new sequelize_typescript_1.Sequelize(`postgres://${config_1.config.username}:${config_1.config.password}@${config_1.config.host}:${config_1.config.port}/${config_1.config.database}`);
//# sourceMappingURL=sequelize.js.map