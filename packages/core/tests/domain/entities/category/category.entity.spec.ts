import { Category, CategoryProps } from "../../../../src/domain/entities/category/category.entity";


describe("Category entity unit tests", () => {
  let categoryInfo: CategoryProps;
  beforeEach(() => {
    categoryInfo = {
      name: "Food",
    };
  });

  it("Should create a valid Category", () => {
    const category = new Category(categoryInfo);

    expect(() => new Category(categoryInfo)).not.toThrowError();
    expect(category.props).toStrictEqual(categoryInfo);
  });
});
