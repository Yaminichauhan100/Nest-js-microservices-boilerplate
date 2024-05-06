"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceManagementController = void 0;
const common_1 = require("@nestjs/common");
const service_management_service_1 = require("./service.management.service");
let ServiceManagementController = class ServiceManagementController {
    constructor(serviceManagementService) {
        this.serviceManagementService = serviceManagementService;
    }
};
exports.ServiceManagementController = ServiceManagementController;
exports.ServiceManagementController = ServiceManagementController = __decorate([
    (0, common_1.Controller)('service-management'),
    __metadata("design:paramtypes", [service_management_service_1.ServiceManagementService])
], ServiceManagementController);
//# sourceMappingURL=service.management.controller.js.map