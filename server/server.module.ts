import { Module } from '@nestjs/common';
import { AngularUniversalModule } from '@nestjs/ng-universal';
import { join } from 'path';
import { SaladController } from './src/salad/salad.controller';
import { SaladService } from './src/salad/salad.service';
import { UserService } from './src/user/user.service';
import { UserController } from './src/user/user.controller';

@Module({
  imports: [
    AngularUniversalModule.forRoot({
      viewsPath: join(process.cwd(), 'dist/browser'),
      bundle: require('../server/main'),
      liveReload: true
    })
  ],
  controllers: [SaladController, UserController],
  providers: [SaladService, UserService]
})
export class ApplicationModule {}
