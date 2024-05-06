"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceManagementModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const response_handler_1 = require("../lib/response.handler");
const constant_1 = require("../common/constant");
const logger_module_1 = require("../logger/logger.module");
const database_module_1 = require("../database/database.module");
const logging_interceptor_1 = require("../interceptor/logging.interceptor");
const service_management_controller_1 = require("./service.management.controller");
const service_management_service_1 = require("./service.management.service");
const service_management_entity_1 = require("../entity/service.management.entity");
let ServiceManagementModule = class ServiceManagementModule {
};
exports.ServiceManagementModule = ServiceManagementModule;
exports.ServiceManagementModule = ServiceManagementModule = __decorate([
    (0, common_1.Module)({
        imports: [
            database_module_1.DatabaseModule,
            database_module_1.DatabaseModule.forFeature([service_management_entity_1.ServiceManagement]),
            jwt_1.JwtModule.register({
                secret: constant_1.APP_CONFIG.secret,
                signOptions: { expiresIn: constant_1.APP_CONFIG.expires },
            }),
            logger_module_1.LoggerModule,
        ],
        controllers: [service_management_controller_1.ServiceManagementController],
        providers: [
            service_management_service_1.ServiceManagementService,
            response_handler_1.ResponseHandler,
            service_management_entity_1.ServiceManagement,
            common_1.Logger,
            logging_interceptor_1.LoggingInterceptor,
        ],
    })
], ServiceManagementModule);
//# sourceMappingURL=service.management.module.js.map