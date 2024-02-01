import { IoK8sApiDiscoveryV1ForZoneModelOptions as IoK8sApiDiscoveryV1ForZone } from '../IoK8sApiDiscoveryV1ForZone';
import { BaseModel } from '../types';
import type { IoK8sApiDiscoveryV1EndpointHintsModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiDiscoveryV1EndpointHintsModel extends BaseModel {
  // forZones indicates the zone(s) this endpoint should be consumed by to enable topology aware routing.
  forZones?: Array<IoK8sApiDiscoveryV1ForZone>;

  constructor(data: IoK8sApiDiscoveryV1EndpointHintsModelOptions) {
    super();
    validate(data);
    this.forZones = data.forZones;
  }

  static create(data: IoK8sApiDiscoveryV1EndpointHintsModelOptions): IoK8sApiDiscoveryV1EndpointHintsModel {
    return new IoK8sApiDiscoveryV1EndpointHintsModel(data);
  }

  toObject(): Partial<this> {
    return {
      forZones: this.forZones,
    } as Partial<this>;
  }
}

export default IoK8sApiDiscoveryV1EndpointHintsModel;
