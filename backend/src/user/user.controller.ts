import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  UseGuards,
  Request,
  Response,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/userDto';
import { LocalAuthGuard } from './guards/localAuthGuard';
import { JwtAuthGuard } from './guards/jwtAuthGuard';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  register(@Body() createUserDto: UserDto) {
    console.log(createUserDto);
    return this.userService.register(createUserDto);
  }
  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Request() req, @Response() res) {
    res.status(200).json({
      idToken: await this.userService.login(req.user),
      user_id: req.user.user_id,
      expiresIn: 60,
    });
  }
  @UseGuards(JwtAuthGuard)
  @Get(':flower_id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':flower_id')
  update(@Param('id') id: string, @Body() updateUserDto: UserDto) {
    return this.userService.update(+id, updateUserDto);
  }
}
