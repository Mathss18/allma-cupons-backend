import { Establishment } from "../../../../domain/entities/establishment/establishment.entity";
export interface EstablishmentRepository {
  findAll(): Promise<Establishment[]>;
  findOne(id: string): Promise<Establishment>;
  insert(establishment: Establishment): Promise<Establishment>;
  update(id: string, establishment: Establishment): Promise<Establishment>;
  delete(id: string): Promise<Establishment>;
}
