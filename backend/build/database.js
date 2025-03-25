"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDb = exports.connectToDb = void 0;
const mongodb_1 = require("mongodb");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
let db;
const connectToDb = (callback) => __awaiter(void 0, void 0, void 0, function* () {
    const client = new mongodb_1.MongoClient(process.env.DB_CONN_STRING);
    try {
        yield client.connect();
        db = client.db(process.env.DB_NAME);
        callback();
    }
    catch (error) {
        console.error(error);
    }
});
exports.connectToDb = connectToDb;
const getDb = () => db;
exports.getDb = getDb;
