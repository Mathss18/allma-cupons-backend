import { EstablishmentProps } from './../establishment.entity';
import { Adress } from '../adress/adress.vo';
import {
  IsDate,
  IsOptional,
  MaxLength,
  IsString,
  IsNotEmpty,
  IsInstance,
  IsBoolean,
  validateSync,
} from 'class-validator';
import { Plan } from '../../plan/plan.entity';
import { Category } from '../../category/category.entity';

export class EstablishmentRules {
  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsInstance(Category)
  category: Category;

  @MaxLength(14)
  @IsString()
  @IsNotEmpty()
  cnpj: string;

  @IsInstance(Plan)
  plan: Plan;

  @IsString()
  @IsNotEmpty()
  logo: string;

  @IsString()
  @IsNotEmpty()
  phoneNumber: string;

  @IsString()
  @IsNotEmpty()
  mobileNumber: string;

  @IsInstance(Adress)
  adress: Adress;

  @IsBoolean()
  @IsOptional()
  isActive?: boolean;

  @IsDate()
  @IsOptional()
  createdAt?: Date;

  constructor({
    name,
    category,
    cnpj,
    plan,
    logo,
    phoneNumber,
    mobileNumber,
    adress,
    isActive,
    createdAt,
  }: EstablishmentProps) {
    Object.assign(this, { name, category, cnpj, plan, logo, phoneNumber, mobileNumber, adress, isActive, createdAt });
  }

  validate() {
    const errors = validateSync(this, { stopAtFirstError: false });
    if (errors.length) {
      for (const error of errors) {
        throw new Error(JSON.stringify(error.constraints))
      }
    }
  }
}