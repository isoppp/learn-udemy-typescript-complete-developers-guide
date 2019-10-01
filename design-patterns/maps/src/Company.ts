import { address, company } from 'faker'
import { Mappable } from './CustomMap'

export class Company implements Mappable {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string;

  constructor() {
    this.companyName = company.companyName();
    this.catchPhrase = company.catchPhrase();
    this.location = {
      lat: parseFloat(address.latitude()),
      lng: parseFloat(address.longitude()),
    }
    this.color = 'pink'
  }

  markerContent(): string {
    return `
    <h1>Company Name: ${this.companyName}</h1>
    <h3>Catch Phrase: ${this.catchPhrase}</h3>
    `
  }
}
