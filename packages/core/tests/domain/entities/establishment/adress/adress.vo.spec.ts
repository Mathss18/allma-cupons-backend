import { Adress } from "../../../../../src/domain/entities/establishment/adress/adress.vo";

describe("Adress Value object unit tests", () => {
  it("Should create an adress", () => {
    const info = {
      city: "Piracicaba",
      country: "Brazil",
      neighborhood: "São Jorge",
      number: "79",
      state: "São Paulo",
      street: "Rua Bofete",
      zipCode: "13402803",
    };
    const adress = new Adress(info);

    expect(adress.props).toStrictEqual(info);
  });
});
