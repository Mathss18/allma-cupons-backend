import { FindAllEstablishmentUseCase } from "./../../../../src/application/use-cases/establishment/find-all-establishment.use-case";
import { CreateEstablishmentUseCase } from "./../../../../src/application/use-cases/establishment/create-establishment.use-case";
import { EstablishmentInMemoryRepository } from "./../../../../src/infra/repositories/in-memory/establishment/establishment-in-memory.repository";
import {
  AdressProps,
} from "../../../../src/domain/entities/establishment/adress/adress.vo";

describe("Establishment entity create use-case tests", () => {
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


  it("Should create a valid establishment and store it", async () => {
    const inMemory = new EstablishmentInMemoryRepository();
    const createUseCase = new CreateEstablishmentUseCase(inMemory);
    const findAllUseCase = new FindAllEstablishmentUseCase(inMemory);

    const establishment = await createUseCase.execute(establishmentInfo);
    const establishments = await findAllUseCase.execute();

    // expect(establishment.props.category).toMatchObject(establishmentInfo.category);
    // expect(establishmentInfo.category).toMatchObject(establishment.props.category);
    expect(establishmentInfo.category).toEqual(expect.objectContaining(establishment.props.category));
    expect(establishment.props.adress.props).toStrictEqual(adressInfo);
    // expect(establishments[0].props).toMatchObject(establishmentInfo);
  });

});
