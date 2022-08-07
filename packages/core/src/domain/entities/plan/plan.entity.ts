import { Entity } from "../../../shared/entity/entity";
import UniqueEntityId from "../../../shared/value-object/unique-entity-id.vo";
import { PlanRules } from "./validation/plan-validator";

export interface PlanProps{
  name: string;
  price: number;
  isActive?: boolean;
  createdAt?: Date;
}

export class Plan extends Entity<PlanProps> {
  constructor(public readonly props: PlanProps, id?: UniqueEntityId) {
    new PlanRules(props).validate()
    super(props, id);
    this.props = props;
    this.props.isActive = true;
    this.props.createdAt = new Date();
  }
}
