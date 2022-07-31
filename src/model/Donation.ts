import { v4 as uuidV4 } from 'uuid';

class Devices {
  type: 'notebook' | 'desktop' | 'netbook' | 'screen' | 'printer' | 'scanner';

  condition: string;
}

class Donation {
  id?: string;

  name: string;

  phone: string;

  zip: string;

  city: string;

  state: string;

  streetAddress: string;

  number: number;

  complement: string;

  neighborhood: string;

  deviceCount: number;

  devices: Devices[];

  constructor() {
    if(!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Donation, Devices };