import { BaseModel } from '../types';
import type { IoK8sApiCoreV1CapabilitiesModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1CapabilitiesModel extends BaseModel {
  // Added capabilities
  add?: Array<string>;
  // Removed capabilities
  drop?: Array<string>;

  constructor(data: IoK8sApiCoreV1CapabilitiesModelOptions) {
    super();
    validate(data);
    this.add = data.add;
    this.drop = data.drop;
  }

  static create(data: IoK8sApiCoreV1CapabilitiesModelOptions): IoK8sApiCoreV1CapabilitiesModel {
    return new IoK8sApiCoreV1CapabilitiesModel(data);
  }

  toObject(): Partial<this> {
    return {
      add: this.add,
      drop: this.drop,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1CapabilitiesModel;
