import { DeleteEstablishmentUseCase } from './../../../core/src/application/use-cases/establishment/delete-establishment.use-case';
import { UpdateEstablishmentUseCase } from './../../../core/src/application/use-cases/establishment/update-establishment.use-case';
import { FindOneEstablishmentUseCase } from './../../../core/src/application/use-cases/establishment/find-one-establishment.use-case';
import { FindAllEstablishmentUseCase } from './../../../core/src/application/use-cases/establishment/find-all-establishment.use-case';
import { CreateEstablishmentUseCase } from './../../../core/src/application/use-cases/establishment/create-establishment.use-case';
import { EstablishmentInMemoryRepository } from './../../../core/src/infra/repositories/in-memory/establishment/establishment-in-memory.repository';
import { EstablishmentRepository } from '../../../core/src/infra/repositories/in-memory/establishment/establishment-repository-interface';
import { EstablishmentController } from './establishment.controller';
import { EstablishmentService } from './establishment.service';
import { Module } from '@nestjs/common';

@Module({
  controllers: [EstablishmentController],
  providers: [
    EstablishmentService,
    {
      provide: EstablishmentInMemoryRepository,
      useClass: EstablishmentInMemoryRepository,
    },
    {
      provide: FindAllEstablishmentUseCase,
      useFactory: (establishmentRepository: EstablishmentRepository) => {
        return new FindAllEstablishmentUseCase(establishmentRepository);
      },
      inject: [EstablishmentInMemoryRepository],
    },
    {
      provide: FindOneEstablishmentUseCase,
      useFactory: (establishmentRepository: EstablishmentRepository) => {
        return new FindOneEstablishmentUseCase(establishmentRepository);
      },
      inject: [EstablishmentInMemoryRepository],
    },
    {
      provide: CreateEstablishmentUseCase,
      useFactory: (establishmentRepository: EstablishmentRepository) => {
        return new CreateEstablishmentUseCase(establishmentRepository);
      },
      inject: [EstablishmentInMemoryRepository],
    },
    {
      provide: UpdateEstablishmentUseCase,
      useFactory: (establishmentRepository: EstablishmentRepository) => {
        return new UpdateEstablishmentUseCase(establishmentRepository);
      },
      inject: [EstablishmentInMemoryRepository],
    },
    {
      provide: DeleteEstablishmentUseCase,
      useFactory: (establishmentRepository: EstablishmentRepository) => {
        return new DeleteEstablishmentUseCase(establishmentRepository);
      },
      inject: [EstablishmentInMemoryRepository],
    },
  ],
})
export class EstablishmentModule {}
