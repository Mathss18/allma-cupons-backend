import { Establishment } from "../../../domain/entities/establishment/establishment.entity";
import { EstablishmentRepository } from "../../../infra/repositories/in-memory/establishment/establishment-repository-interface";
import { EstablishmentUpdateDTO } from "../dto/establishment.dto";

export class UpdateEstablishmentUseCase {
  constructor(private establishmentRepository: EstablishmentRepository) { }

  async execute(id: string, input: EstablishmentUpdateDTO): Promise<Establishment> {
    const establishment = await this.establishmentRepository.findOne(id);
    establishment.update(input);

    return await this.establishmentRepository.update(id, establishment);
  }
}