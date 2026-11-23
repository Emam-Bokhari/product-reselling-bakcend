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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("./app/config"));
const routes_1 = __importDefault(require("./app/routes"));
const globalErrorHandler_1 = require("./app/middleware/globalErrorHandler");
const notFound_1 = __importDefault(require("./app/middleware/notFound"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const app = (0, express_1.default)();
// parser
app.use(express_1.default.json());
// app.use(cors());
app.use((0, cookie_parser_1.default)());
// Serverless MongoDB connection handler (prevents buffering timeout on Vercel cold starts)
let cachedConnection = null;
app.use((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (mongoose_1.default.connection.readyState === 1) {
        return next();
    }
    try {
        if (!cachedConnection || mongoose_1.default.connection.readyState === 0) {
            cachedConnection = mongoose_1.default.connect(config_1.default.database_url, {
                serverSelectionTimeoutMS: 5000,
                maxPoolSize: 10,
            });
        }
        yield cachedConnection;
        next();
    }
    catch (error) {
        cachedConnection = null;
        next(error);
    }
}));
// app.use(cors({ origin: ['http://localhost:3000'], credentials: true }));
app.use((0, cors_1.default)({
    origin: [
        'https://re-sell-bd-client.vercel.app',
        'https://product-reselling-frontend.vercel.app',
        'http://localhost:3000',
        'http://localhost:5173',
        'https://product-reselling-frontend.vercel.app'
    ],
    credentials: true,
}));
// application routes
app.use('/api/v1', routes_1.default);
// check server health
app.get('/', (req, res) => {
    res.send('Server is running...');
});
// global error handler
app.use(globalErrorHandler_1.globalErrorHandler);
// not found handler
app.use(notFound_1.default);
exports.default = app;
