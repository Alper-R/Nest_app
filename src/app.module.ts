import { Module } from '@nestjs/common';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { ProductModule } from './products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root', 
      database: 'nest_db',
      entities: [],
      synchronize: true,
    }),
    UsersModule,
  ],
 controllers: [UsersController],
  providers: [UsersService],
})
export class AppModule {}