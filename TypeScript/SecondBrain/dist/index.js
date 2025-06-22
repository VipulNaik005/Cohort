"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = require("./db");
const routes_1 = __importDefault(require("./routes"));
let app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/app/v1", routes_1.default);
app.listen(3000, () => {
    console.log("listening at 3000");
    (0, db_1.connectToDatabase)();
});
