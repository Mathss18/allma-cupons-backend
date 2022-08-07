import {
  Plan,
  PlanProps,
} from "../../../../src/domain/entities/plan/plan.entity";

describe("Plan entity unit tests", () => {
  let planInfo: PlanProps;
  beforeEach(() => {
    planInfo = {
      name: "Plano P",
      price: 100.0,
    };
  });

  it("Should create a valid plan", () => {
    const plan = new Plan(planInfo);

    expect(() => new Plan(planInfo)).not.toThrowError();
    expect(plan.props).toStrictEqual(planInfo);
  });
});
