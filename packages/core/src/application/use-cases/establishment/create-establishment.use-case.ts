import { Establishment } from '../../../domain/entities/establishment/establishment.entity';
import { EstablishmentRepository } from "../../../infra/repositories/in-memory/establishment/establishment-repository-interface";
import { EstablishmentCreateDTO } from '../dto/establishment.dto';

export class CreateEstablishmentUseCase {

  constructor(private establishmentRepository: EstablishmentRepository) { }

  async execute(input: EstablishmentCreateDTO): Promise<Establishment> {

    return await this.establishmentRepository.insert(new Establishment(input));
  }

}
