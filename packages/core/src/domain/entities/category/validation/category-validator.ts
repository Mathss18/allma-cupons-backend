import {
  IsDate,
  IsOptional,
  MaxLength,
  IsString,
  IsNotEmpty,
  IsBoolean,
  validateSync,
} from 'class-validator';
import { CategoryProps } from '../category.entity';

export class CategoryRules {
  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsBoolean()
  @IsOptional()
  isActive?: boolean;

  @IsDate()
  @IsOptional()
  createdAt?: Date;

  constructor({
    name,
    isActive,
    createdAt,
  }: CategoryProps) {
    Object.assign(this, { name, isActive, createdAt });
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