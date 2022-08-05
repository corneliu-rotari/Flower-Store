import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/userDto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './entities/user.entity';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Users) private userRepository: Repository<Users>,
    private jwtService: JwtService,
  ) {}
  register(createUserDto: UserDto) {
    return this.userRepository.save(createUserDto);
  }

  async findOne(userId: number) {
    return await this.userRepository.findOneBy({ user_id: userId });
  }
  async findByUserAndPassword(
    username: string,
    pass: string,
  ): Promise<Users | undefined> {
    return await this.userRepository.findOneBy({
      username: username,
      password: pass,
    });
  }
  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.findByUserAndPassword(username, pass);
    if (user) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
  update(user_id: number, updateUserDto: UserDto) {
    return this.userRepository.update({ user_id }, updateUserDto);
  }
  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return this.jwtService.sign(payload);
  }
}
