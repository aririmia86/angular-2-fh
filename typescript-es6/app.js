"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import {Xmen} from './classes/xmen.class';
//import {Villano} from './classes/villano.class';
var index_1 = require("./classes/index");
var wolverine = new index_1.Xmen("Logan", "wolverine");
var lex = new index_1.Villano("Lex Luthor", "Conquistar mundo");
wolverine.imprimir();
lex.imprimirPlan();
