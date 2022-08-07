import { Entity } from "../../../shared/entity/entity";
import UniqueEntityId from "../../../shared/value-object/unique-entity-id.vo";
import { CategoryRules } from "./validation/category-validator";

export interface CategoryProps{
  name: string;
  isActive?: boolean;
  createdAt?: Date;
}

export class Category extends Entity<CategoryProps> {
  constructor(public readonly props: CategoryProps, id?: UniqueEntityId) {
    new CategoryRules(props).validate()
    super(props, id);
    this.props = props;
    this.props.isActive = true;
    this.props.createdAt = new Date();
  }
}
