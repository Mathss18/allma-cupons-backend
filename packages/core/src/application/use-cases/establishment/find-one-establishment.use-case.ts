import { Establishment } from "../../../domain/entities/establishment/establishment.entity";
import { EstablishmentRepository } from "../../../infra/repositories/in-memory/establishment/establishment-repository-interface";

export class FindOneEstablishmentUseCase{

  constructor(private establishmentRepository: EstablishmentRepository){}

  async execute(id: string): Promise<Establishment>{
    const establishment = await this.establishmentRepository.findOne(id);
    return establishment;
  }
}