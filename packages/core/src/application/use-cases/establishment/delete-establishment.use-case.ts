import { Establishment } from "../../../domain/entities/establishment/establishment.entity";
import { EstablishmentRepository } from "../../../infra/repositories/in-memory/establishment/establishment-repository-interface";

export class DeleteEstablishmentUseCase {

  constructor(private establishmentRepository: EstablishmentRepository) { }

  async execute(id: string): Promise<Establishment> {
    return await this.establishmentRepository.delete(id);
  }
}