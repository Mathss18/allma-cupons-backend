import { Establishment } from "../../../../domain/entities/establishment/establishment.entity";
import { EstablishmentRepository } from "./establishment-repository-interface";
import UniqueEntityId from "../../../../shared/value-object/unique-entity-id.vo";

export class EstablishmentInMemoryRepository implements EstablishmentRepository {

  private establishments: Establishment[] = []

  async findAll(): Promise<Establishment[]> {
    return this.establishments;
  }

  async findOne(id: UniqueEntityId | string): Promise<Establishment> {
    const index = this.establishments.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new Error("Establishment not found.");
    }
    return this.establishments[index];
  }

  async insert(establishment: Establishment): Promise<Establishment> {
    this.establishments.push(establishment);
    return establishment;
  }

  async update(id: UniqueEntityId | string, establishment: Establishment): Promise<Establishment> {
    const index = this.establishments.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new Error("Establishment not found.");
    }
    this.establishments[index] = establishment;

    return establishment;
  }

  async delete(id: UniqueEntityId | string): Promise<Establishment> {
    const index = this.establishments.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new Error("Establishment not found.");
    }
    const establishmentToBeRemoved = this.establishments[index];
    this.establishments.splice(index, 1);

    return establishmentToBeRemoved;
  }

  private _get(id: UniqueEntityId | string) {

  }

}