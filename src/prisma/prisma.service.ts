/* eslint-disable prettier/prettier */
import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'

@Injectable()
export class PrismaService extends PrismaClient
    implements OnModuleInit, OnModuleDestroy {
    public client: PrismaClient

    constructor() {
        super({
            log: ['query']
        })
    }

    onModuleInit() {
        return this.$connect()
    }

    onModuleDestroy() {
        return this.$disconnect()
    }
}
