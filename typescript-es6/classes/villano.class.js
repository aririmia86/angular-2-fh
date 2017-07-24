"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Villano = (function () {
    function Villano(nombre, plan) {
        this.nombre = nombre;
        this.plan = plan;
    }
    Villano.prototype.imprimirPlan = function () {
        console.log("El plan es: " + this.plan);
    };
    return Villano;
}());
exports.Villano = Villano;
