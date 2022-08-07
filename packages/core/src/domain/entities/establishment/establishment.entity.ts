import { UpdateEstablishmentDTO } from "../../../application/use-cases/establishment/dto/establishment.dto";
import { Entity } from "../../../shared/entity/entity";
import { Adress } from "./adress/adress.vo";
import UniqueEntityId from "../../../shared/value-object/unique-entity-id.vo";
import { EstablishmentRules } from "./validation/establishment-validator";
import { Plan } from "../plan/plan.entity";
import { Category } from "../category/category.entity";


export interface EstablishmentProps {
  name: string;
  category: Category;
  cnpj: string;
  plan: Plan;
  logo: string;
  phoneNumber: string;
  mobileNumber: string;
  adress: Adress;
  isActive?: boolean;
  createdAt?: Date;
}

export class Establishment extends Entity<EstablishmentProps>{

  constructor(public readonly props: EstablishmentProps, id?: UniqueEntityId) {
    new EstablishmentRules(props).validate()
    super(props, id);
    this.props = props;
    this.props.isActive = true;
    this.props.createdAt = new Date();
  }

  update(props: UpdateEstablishmentDTO) {
    this.name = props.name;
    this.logo = props.logo;
    this.phoneNumber = props.phoneNumber;
    this.mobileNumber = props.mobileNumber;
  }

  activate() {
    this.props.isActive = true;
  }

  deactivate() {
    this.props.isActive = false;
  }

  private set name(name: string) {
    this.props.name = name;
  }

  private set logo(logo: string) {
    this.props.logo = logo;
  }

  private set phoneNumber(phoneNumber: string) {
    this.props.phoneNumber = phoneNumber;
  }

  private set mobileNumber(mobileNumber: string) {
    this.props.mobileNumber = mobileNumber;
  }

  private set adress(adress: Adress) {
    this.props.adress = adress;
  }

}