import {
  IsDate,
  IsOptional,
  MaxLength,
  IsString,
  IsNotEmpty,
  IsBoolean,
  validateSync,
  IsNumber,
  IsPositive,
} from 'class-validator';
import { PlanProps } from '../plan.entity';

export class PlanRules {
  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  price: number;

  @IsBoolean()
  @IsOptional()
  isActive?: boolean;

  @IsDate()
  @IsOptional()
  createdAt?: Date;

  constructor({
    name,
    price,
    isActive,
    createdAt,
  }: PlanProps) {
    Object.assign(this, { name, price, isActive, createdAt });
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