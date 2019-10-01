import { address, name } from 'faker'
import { Mappable } from './CustomMap'

export class User implements Mappable {
  name: string;
  location: { lat: number, lng: number };
  color: string;

  constructor() {
    this.name = name.firstName();
    this.location = {
      lat: parseFloat(address.latitude()),
      lng: parseFloat(address.longitude()),
    }
    this.color = 'orange'
  }

  markerContent(): string {
    return `User Name: ${this.name}`
  }
}
