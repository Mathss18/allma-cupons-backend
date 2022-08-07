import { Adress } from "../../../../domain/entities/establishment/adress/adress.vo";
import { CreateAdressDTO } from "../../../../domain/entities/establishment/adress/dto/adress.dto";
import { CreateCategoryDTO } from "../../category/dto/category.dto";
import { CreatePlanDTO } from "../../plan/dto/plan.dto";

export type CreateEstablishmentDTO = {
  name: string;
  category: CreateCategoryDTO;
  cnpj: string;
  plan: CreatePlanDTO;
  logo: string;
  phoneNumber: string;
  mobileNumber: string;
  adress: CreateAdressDTO;
  isActive?: boolean;
  createdAt?: Date;
};

export type UpdateEstablishmentDTO = Omit<
  CreateEstablishmentDTO,
  "plan" | "category" | "cnpj" | "adress" | "isActive" | "createdAt"
>;
