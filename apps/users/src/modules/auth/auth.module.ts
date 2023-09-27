import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';

import { UserModel, UserSchema } from '../users/models/user.model';
import { UsersModule } from '../users/users.module';
import { AuthResolver } from './auth.resolver';

import { SessionSerializer } from './strategy/session.serializer';
import { LocalStrategy } from './strategy/local.strategy';
import { AuthService } from './services/auth.service';
import { JwtStrategy } from './strategy/jwt.strategy';

import ENV from '../../config';

@Module({
  imports: [
    UsersModule,
    PassportModule.register({ session: true }),
    JwtModule.register(ENV.JWT),
    MongooseModule.forFeature([
      {
        name: UserModel.name,
        schema: UserSchema,
      },
    ]),
  ],
  providers: [AuthService, AuthResolver, LocalStrategy, JwtStrategy, SessionSerializer],
})
export class AuthModule {}
