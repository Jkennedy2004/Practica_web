import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';               // <-- Importar aquí
import { InstructorService } from './instructor.service';
import { InstructorResolver } from './instructor.resolver';
import { Instructor } from './entities/instructor.entity';    // <-- Importar entidad

@Module({
  imports: [TypeOrmModule.forFeature([Instructor])],          // <-- Registrar repositorio
  providers: [InstructorResolver, InstructorService],
})
export class InstructorModule {}
