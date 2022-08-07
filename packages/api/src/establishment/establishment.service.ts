import { FindAllEstablishmentUseCase } from './../../../core/src/application/use-cases/establishment/find-all-establishment.use-case';
import { CreateEstablishmentUseCase } from './../../../core/src/application/use-cases/establishment/create-establishment.use-case';
import { Injectable } from '@nestjs/common';
import { CreateEstablishmentDTO } from '../../../core/src/application/use-cases/establishment/dto/establishment.dto';

@Injectable()
export class EstablishmentService {
  constructor(
    private createEstablishmentUseCase: CreateEstablishmentUseCase,
    private findAllEstablishmentUseCase: FindAllEstablishmentUseCase) { }

  create(createEstablishmentDto: CreateEstablishmentDTO) {
    return this.createEstablishmentUseCase.execute(createEstablishmentDto);
  }

  findAll() {
    return this.findAllEstablishmentUseCase.execute();
  }

  findOne(id: number) {
    return `This action returns a #${id} establishment`;
  }

  // update(id: number, updateEstablishmentDto: UpdateEstablishmentDto) {
  //   return `This action updates a #${id} establishment`;
  // }

  remove(id: number) {
    return `This action removes a #${id} establishment`;
  }
}
