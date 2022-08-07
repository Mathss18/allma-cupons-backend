import { v4 as uuidv4, validate as uuidValidate } from "uuid";


export class UniqueEntityId {
  constructor(readonly id?: string) {
    this.id = id || uuidv4();
    this.validate();
  }

  private validate() {
    if(this.id ===  undefined){
      throw new Error('Undefined uuid');
    }
    const isValid = uuidValidate(this.id);
    if (!isValid) {
      throw new Error('Invalid uuid');
    }
  }
}

export default UniqueEntityId;