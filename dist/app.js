"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const typescript_rest_1 = require("typescript-rest");
const mongoose_1 = __importDefault(require("mongoose"));
const apiCall_1 = __importDefault(require("./controller/apiCall"));
//mongoose connection
mongoose_1.default
    .connect("mongodb://localhost/PostTypeRest", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
})
    .then(() => console.log("Connected To mongodb"))
    .catch((err) => console.log(err));
let app = express_1.default();
typescript_rest_1.Server.buildServices(app, ...apiCall_1.default);
app.listen(3000, function () {
    console.log("listening on port 3000!");
});