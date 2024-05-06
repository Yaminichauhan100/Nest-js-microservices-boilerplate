import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDetails } from 'src/entity/user.entity';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { LoginDto, SignupDto } from 'src/dto/user.dto';
import { UserRepository } from './auth.repositoty';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserDetails)
    private readonly userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}

  async signUp(
    signupDto: SignupDto,
  ): Promise<{ token: string; user: UserDetails }> {
    try {
      console.log('111111111111', signupDto);
      const { username, email, password } = signupDto;
      // Check if a user with the provided email already exists
      const existingUser = await this.userRepository.findOne({
        where: { email: email },
      });
      if (existingUser) {
        throw new ConflictException('User with this email already exists');
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const user: any = this.userRepository.create({
        id: undefined,
        username,
        email,
        password: hashedPassword,
      });
      await this.userRepository.save(user);
      const token = this.jwtService.sign({ id: user.id });
      return { token, user };
    } catch (err) {
      throw err;
    }
  }

  async login(loginDto: LoginDto): Promise<{ token: string }> {
    try {
      console.log('----------------');
      const { email, password } = loginDto;

      // Find the user by email
      const user = await this.userRepository.findOneBy({ email: email });
      console.log(user, '0000000000000000');

      // If no user is found, throw NotFoundException
      if (!user) {
        throw new NotFoundException('User not found');
      }

      // Compare the provided password with the hashed password
      const isPasswordMatched = await bcrypt.compare(password, user.password);

      // If the passwords don't match, throw BadRequestException
      if (!isPasswordMatched) {
        throw new BadRequestException('Invalid email or password');
      }

      // Generate and return a JWT token
      const token = this.jwtService.sign({ id: user.id });
      return { token };
    } catch (err) {
      // Rethrow the error if it's not a specific exception
      throw err;
    }
  }
  async verifyUser(email: string, password: string) {
    const user = await this.userRepository.findOneBy({ email });
    if (!user) {
      throw new UnauthorizedException('Credentials are not valid.');
    }
    const passwordIsValid = await bcrypt.compare(password, user.password);
    if (!passwordIsValid) {
      throw new UnauthorizedException('Credentials are not valid.');
    }
    return user;
  }
  async getProfile(id: any): Promise<UserDetails> {
    try {
      return this.userRepository.findOneBy({ id });
    } catch (err) {
      throw err;
    }
  }
}
