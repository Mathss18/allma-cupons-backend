import { Establishment } from "../../../domain/entities/establishment/establishment.entity";
import { EstablishmentRepository } from "../../../infra/repositories/in-memory/establishment/establishment-repository-interface";

export class FindAllEstablishmentUseCase {

  constructor(private establishmentRepository: EstablishmentRepository) { }

  async execute(): Promise<Establishment[]> {
    return await this.establishmentRepository.findAll();
  }
}