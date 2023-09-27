import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { PrismaService } from 'src/prisma/prisma.service'
import { CreateAccountController } from './controllers/create-account.controller'

@Module({
  imports: [],
  controllers: [AppController, CreateAccountController],
  providers: [AppService, PrismaService],
})
export class AppModule { }
