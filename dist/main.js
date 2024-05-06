"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const nest_winston_1 = require("nest-winston");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const constant_1 = require("./common/constant");
const logging_interceptor_1 = require("./interceptor/logging.interceptor");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe({ whitelist: true, transform: true }));
    app.enableCors();
    app.setGlobalPrefix(`api/${constant_1.CONSTANT.API_VERSION}`);
    app.useLogger(app.get(nest_winston_1.WINSTON_MODULE_NEST_PROVIDER));
    const config = new swagger_1.DocumentBuilder()
        .setTitle('SONNY QUIVIO')
        .setDescription('Sonny quivio API Documentation')
        .setVersion('1.0.0')
        .addTag('SONNY')
        .addApiKey({
        type: 'apiKey',
        in: 'header',
        name: 'Authorization',
    }, 'basic')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    app.useGlobalInterceptors(new logging_interceptor_1.LoggingInterceptor(app.get(common_1.Logger)));
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map