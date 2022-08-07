import { FindAllEstablishmentUseCase } from "./../../../../src/application/use-cases/establishment/find-all-establishment.use-case";
import { CreateEstablishmentUseCase } from "./../../../../src/application/use-cases/establishment/create-establishment.use-case";
import { UpdateEstablishmentUseCase } from "./../../../../src/application/use-cases/establishment/update-establishment.use-case";
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

describe("Establishment entity update use-case tests", () => {
  let adressInfo: AdressProps;
  let establishmentInfo: EstablishmentProps;
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
      category: new Category({name: "food"}),
      cnpj: "12345678901234",
      plan: new Plan({ name: "Premium", price: 100.0 }),
      phoneNumber: "1934353705",
      mobileNumber: "19983136930",
      adress: new Adress(adressInfo),
    };
  });

  it("Should create a valid establishment and find it by its ID and update it", async () => {
    const inMemory = new EstablishmentInMemoryRepository();
    const createUseCase = new CreateEstablishmentUseCase(inMemory);
    const findAllUseCase = new FindAllEstablishmentUseCase(inMemory);
    const updateUseCase = new UpdateEstablishmentUseCase(inMemory);

    var establishment = await createUseCase.execute(establishmentInfo);
    var establishments = await findAllUseCase.execute();

    expect(establishment.props).toStrictEqual(establishmentInfo);
    expect(establishment.props.adress.props).toStrictEqual(adressInfo);
    expect(establishments[0].props).toStrictEqual(establishmentInfo);
    expect(establishments.length).toBe(1);

    const updateInfo = {
      name: "Test2",
      logo: "logo2",
      phoneNumber: "123456789",
      mobileNumber: "123456788",
    };
    await updateUseCase.execute(establishments[0].id!, updateInfo);
    establishments = await findAllUseCase.execute();

    expect(establishments.length).toBe(1);
    expect(establishments[0].props.name).toBe("Test2");
    expect(establishments[0].props.logo).toBe("logo2");
    expect(establishments[0].props.phoneNumber).toBe("123456789");
    expect(establishments[0].props.mobileNumber).toBe("123456788");
  });
});
