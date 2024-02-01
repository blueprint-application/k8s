import { BaseModel } from '../types';
import type { IoK8sApiDiscoveryV1ForZoneModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiDiscoveryV1ForZoneModel extends BaseModel {
  // name represents the name of the zone.
  name: string;

  constructor(data: IoK8sApiDiscoveryV1ForZoneModelOptions) {
    super();
    validate(data);
    this.name = data.name;
  }

  static create(data: IoK8sApiDiscoveryV1ForZoneModelOptions): IoK8sApiDiscoveryV1ForZoneModel {
    return new IoK8sApiDiscoveryV1ForZoneModel(data);
  }

  toObject(): Partial<this> {
    return {
      name: this.name,
    } as Partial<this>;
  }
}

export default IoK8sApiDiscoveryV1ForZoneModel;
