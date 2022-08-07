import { Category } from "../../../domain/entities/category/category.entity";
import { Adress } from "../../../domain/entities/establishment/adress/adress.vo";
import { Plan } from "../../../domain/entities/plan/plan.entity";

export type EstablishmentCreateDTO = {
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
};

export type EstablishmentUpdateDTO = Omit<
  EstablishmentCreateDTO,
  "plan" | "category" | "cnpj" | "adress" | "isActive" | "createdAt"
>;
