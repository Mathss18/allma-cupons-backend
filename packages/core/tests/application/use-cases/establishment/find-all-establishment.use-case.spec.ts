import { FindAllEstablishmentUseCase } from "./../../../../src/application/use-cases/establishment/find-all-establishment.use-case";
import { CreateEstablishmentUseCase } from "./../../../../src/application/use-cases/establishment/create-establishment.use-case";
import { EstablishmentInMemoryRepository } from "./../../../../src/infra/repositories/in-memory/establishment/establishment-in-memory.repository";
import {
  Establishment,
  EstablishmentProps,
} from "./../../../../src/domain/entities/establishment/establishment.entity";
import {
  Adress,
  AdressProps,
} from "../../../../src/domain/entities/establishment/adress/adress.vo";
import { Plan } from "../../../../src/domain/entities/plan/plan.entity";
import { Category } from "../../../../src/domain/entities/category/category.entity";

describe("Establishment entity find-all use-case tests", () => {
  let adressInfo: AdressProps;
  let establishmentInfo: any;
  beforeEach(() => {
    adressInfo = {
      street: "Rua das amoras",
      number: "12",
      neighborhood: "bairro",
      city: "Piracicaba",
      country: "Brasil",
      zipCode: "13402803",
      state: "SP",
    };

    establishmentInfo = {
      name: "Test",
      logo: "logo",
      category: {name: "Food"},
      cnpj: "12345678901234",
      plan: { name: "Premium", price: 100.0 },
      phoneNumber: "1934353705",
      mobileNumber: "19983136930",
      adress: adressInfo,
    };
  });


  it("Should create a valid establishment and store it and find All", async () => {
    const inMemory = new EstablishmentInMemoryRepository();
    const createUseCase = new CreateEstablishmentUseCase(inMemory);
    const findAllUseCase = new FindAllEstablishmentUseCase(inMemory);

    const establishment = await createUseCase.execute(establishmentInfo);
    const establishments = await findAllUseCase.execute();

    // expect(establishment.props.category).toMatchObject(establishmentInfo.category);
    expect(establishmentInfo.category).toMatchObject(establishment.props.category);
    expect(establishment.props.adress.props).toStrictEqual(adressInfo);
    // expect(establishments[0].props).toMatchObject(establishmentInfo);
    expect(establishments.length).toBe(1);
  });

});
