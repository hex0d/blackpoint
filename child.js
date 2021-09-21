"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios = require('axios');
var parent_1 = require("./parent");
var final = [];
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Child.prototype.fetchData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var next, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        next = this.url;
                        result = [];
                        _a.label = 1;
                    case 1:
                        if (!next) return [3 /*break*/, 3];
                        return [4 /*yield*/, axios.get(next)
                                .then(function (response) {
                                result = __spreadArray(__spreadArray([], result, true), response.data.results, true);
                                next = response.data.next;
                            })
                                .catch(function (error) {
                                // handle error
                                console.log(error);
                            })];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 1];
                    case 3:
                        this.pokemons = result;
                        return [2 /*return*/];
                }
            });
        });
    };
    Child.prototype.printlist = function () {
        console.log(this.pokemons);
    };
    Child.prototype.filter = function (itemname) {
        if (this.pokemons) {
            var filtered = this.pokemons.filter(function (item) { return item.name == itemname; });
            return filtered.pop();
        }
        else {
            console.log('Error Fetching API, Poke List is EMPTY');
            return;
        }
    };
    return Child;
}(parent_1.Parent));
function start() {
    return __awaiter(this, void 0, void 0, function () {
        var poke, childO, pidgeotto, name_1, url;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    poke = 'pidgeotto';
                    childO = new Child();
                    return [4 /*yield*/, childO.fetchData()
                        // childO.printlist()
                    ];
                case 1:
                    _a.sent();
                    pidgeotto = childO.filter(poke);
                    if (pidgeotto != undefined) {
                        name_1 = pidgeotto.name, url = pidgeotto.url;
                        console.log(url);
                        console.log(pidgeotto.url + " // This one is using Interfaces"); //even better with interfaces
                    }
                    else {
                        console.log("Could Not Filter " + poke);
                    }
                    return [2 /*return*/];
            }
        });
    });
}
start();
