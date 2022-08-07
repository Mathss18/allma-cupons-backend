import {
  Establishment,
  EstablishmentProps,
} from "../../../../src/domain/entities/establishment/establishment.entity";
import {
  Adress,
  AdressProps,
} from "../../../../src/domain/entities/establishment/adress/adress.vo";
import { Plan } from "../../../../src/domain/entities/plan/plan.entity";
import { Category, CategoryProps } from "../../../../src/domain/entities/category/category.entity";

describe("Establishment entity unit tests", () => {
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
      category: new Category({name: "Food"}),
      cnpj: "12345678901234",
      plan: new Plan({ name: "Premium", price: 100.0 }),
      phoneNumber: "1934353705",
      mobileNumber: "19983136930",
      adress: new Adress(adressInfo),
    };
  });

  it("Should create a valid establishment with a valid adress", () => {
    const establishment = new Establishment(establishmentInfo);

    expect(() => new Establishment(establishmentInfo)).not.toThrowError();
    expect(establishment.props).toStrictEqual(establishmentInfo);
  });
});
