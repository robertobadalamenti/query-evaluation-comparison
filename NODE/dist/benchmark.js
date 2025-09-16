"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const mitata_1 = require("mitata");
const jsonLogicSetup_js_1 = __importStar(require("./JsonLogic/jsonLogicSetup.js"));
const users_js_1 = require("./data/users.js");
const celSetup_js_1 = require("./Cel/celSetup.js");
(0, mitata_1.bench)("JsonLogic", async () => {
    for (const input of users_js_1.testInput) {
        jsonLogicSetup_js_1.default.apply(jsonLogicSetup_js_1.rulesJsonLogic, input);
    }
});
(0, mitata_1.bench)("CEL", async () => {
    for (const input of users_js_1.testInput) {
        (0, celSetup_js_1.celEval)(input);
    }
});
(0, mitata_1.run)();
