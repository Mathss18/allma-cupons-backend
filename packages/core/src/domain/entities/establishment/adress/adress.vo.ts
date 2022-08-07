
export interface AdressProps {
  street: string,
  number: string,
  neighborhood: string,
  city: string,
  country: string,
  zipCode: string,
  state: string

}

export class Adress {
  constructor(public readonly props: AdressProps) {
    this.props = props;
  }

}