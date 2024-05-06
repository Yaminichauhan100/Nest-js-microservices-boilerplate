"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceManagement = void 0;
const abstract_entity_1 = require("../database/abstract.entity");
const typeorm_1 = require("typeorm");
let ServiceManagement = class ServiceManagement extends abstract_entity_1.AbstractEntity {
};
exports.ServiceManagement = ServiceManagement;
exports.ServiceManagement = ServiceManagement = __decorate([
    (0, typeorm_1.Entity)()
], ServiceManagement);
//# sourceMappingURL=service.management.entity.js.map