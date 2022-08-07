import { Category } from './../../../domain/entities/category/category.entity';
import { Establishment } from '../../../domain/entities/establishment/establishment.entity';
import { Plan } from '../../../domain/entities/plan/plan.entity';
import { EstablishmentRepository } from "../../../infra/repositories/in-memory/establishment/establishment-repository-interface";
import { CreateEstablishmentDTO } from './dto/establishment.dto';
import { Adress } from '../../../domain/entities/establishment/adress/adress.vo';

export class CreateEstablishmentUseCase {

  constructor(private establishmentRepository: EstablishmentRepository) { }

  async execute(input: CreateEstablishmentDTO): Promise<Establishment> {

    const plan = new Plan({ name: input.plan.name, price: input.plan.price });
    const category = new Category({ name: input.category.name });
    const adress = new Adress({
      street: input.adress.street,
      number: input.adress.number,
      neighborhood: input.adress.neighborhood,
      city: input.adress.city,
      country: input.adress.country,
      zipCode: input.adress.zipCode,
      state: input.adress.state,
    });

    const establishment = new Establishment({
      name: input.name,
      logo: input.logo,
      category: category,
      cnpj: input.cnpj,
      plan: plan,
      phoneNumber: input.phoneNumber,
      mobileNumber: input.mobileNumber,
      adress: adress
    })
    return await this.establishmentRepository.insert(establishment);
  }

}
