import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { ResponseHandler } from 'src/lib/response.handler';
import { Request, Response } from 'express';
import { HttpStatusCode } from 'axios';
import { LoginDto, SignupDto } from 'src/dto/user.dto';
import { STATUS_MSG } from 'src/common/constant';
import { LocalAuthGuard } from 'src/guards/local-auth.guard';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { UserDetails } from 'src/entity/user.entity';
import { AuthGuard } from '@nestjs/passport';
// import { AuthGuard } from 'src/strategies/jwt.strategy';
@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private readonly responseHandler: ResponseHandler,
  ) {}

  @Post('/signup')
  async signup(
    @Req() req: Request,
    @Res() res: Response,
    @Body() signupDto: SignupDto,
  ) {
    try {
      console.log('-----------------', signupDto);
      const newUser = await this.authService.signUp(signupDto);
      return this.responseHandler.sendResponse(
        res,
        HttpStatusCode.Ok,
        true,
        STATUS_MSG.SUCCESS.message,
        newUser,
      );
    } catch (err: any) {
      return await this.responseHandler.sendErrorResponse(
        res,
        err.status,
        err?.message,
        err?.errors,
      );
    }
  }

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(
    @Req() req: Request,
    @Res() res: Response,
    @Body() loginDto: LoginDto,
  ) {
    try {
      const newUser = await this.authService.login(loginDto);
      return this.responseHandler.sendResponse(
        res,
        HttpStatusCode.Ok,
        true,
        STATUS_MSG.SUCCESS.message,
        newUser,
      );
    } catch (err: any) {
      return await this.responseHandler.sendErrorResponse(
        res,
        err.status,
        err?.message,
        err?.errors,
      );
    }
  }

  // @UseGuards(JwtAuthGuard)
  @Get('/getProfile')
  async getProfile(@Req() req: Request, @Res() res: Response) {
    try {
      console.log(req.headers, '1111111111111111111111');
      const userDetails: any = req;
      // console.log(userDetails, '22222222222');
      const userId: number = userDetails.id;
      const getUser = await this.authService.getProfile(userId);
      return this.responseHandler.sendResponse(
        res,
        HttpStatusCode.Ok,
        true,
        STATUS_MSG.SUCCESS.message,
        getUser,
      );
    } catch (err: any) {
      return await this.responseHandler.sendErrorResponse(
        res,
        err.status,
        err?.message,
        err?.errors,
      );
    }
  }
}
