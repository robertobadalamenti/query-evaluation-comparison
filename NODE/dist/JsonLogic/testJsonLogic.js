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
exports.testJsonLogic = void 0;
const users_1 = require("../data/users");
const jsonLogicSetup_1 = __importStar(require("./jsonLogicSetup"));
const testJsonLogic = () => {
    let totJson = 0;
    for (let i = 0; i < 1000; i++) {
        for (const entry of users_1.testInput) {
            const start = performance.now();
            const res = jsonLogicSetup_1.default.apply(jsonLogicSetup_1.rulesJsonLogic, entry);
            const end = performance.now();
            totJson += end - start;
            if (res !== entry.expectedResult) {
                console.log("Incorrect evaluation ", entry);
                break;
            }
        }
    }
    console.log(`[JsonLogic] Tempo medio: ${(totJson / 1000).toFixed(2)} ms`);
};
exports.testJsonLogic = testJsonLogic;
