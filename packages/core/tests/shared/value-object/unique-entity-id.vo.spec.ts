import { UniqueEntityId } from './../../../src/shared/value-object/unique-entity-id.vo';
import { validate as uuidValidate } from "uuid";

describe("UniqueEntityId Unit Tests", () => {
  const validateSpy = jest.spyOn(UniqueEntityId.prototype as any, "validate");

  it("should throw error when uuid is invalid", () => {
    expect(() => new UniqueEntityId("fake id")).toThrow(new Error('Invalid uuid'));
    expect(validateSpy).toHaveBeenCalled();
  });

  it("should accept an uuid passed in constructor", () => {
    const uuid = "312cffad-1938-489e-a706-643dc9a3cfd3";
    const vo = new UniqueEntityId(uuid);
    expect(vo.id).toBe(uuid);
    expect(validateSpy).toHaveBeenCalled();
  });

  it("should create an uuid when it is not passed in constructor", () => {
    const vo = new UniqueEntityId();

    expect(() => uuidValidate(vo.id as any)).toBeTruthy();
    expect(validateSpy).toHaveBeenCalled();
  });
});