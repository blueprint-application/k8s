import { IoK8sApiCoreV1NodeSelectorTermModelOptions as IoK8sApiCoreV1NodeSelectorTerm } from '../IoK8sApiCoreV1NodeSelectorTerm';
import { BaseModel } from '../types';
import type { IoK8sApiCoreV1PreferredSchedulingTermModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1PreferredSchedulingTermModel extends BaseModel {
  preference: IoK8sApiCoreV1NodeSelectorTerm;
  // Weight associated with matching the corresponding nodeSelectorTerm, in the range 1-100.
  weight: number;

  constructor(data: IoK8sApiCoreV1PreferredSchedulingTermModelOptions) {
    super();
    validate(data);
    this.preference = data.preference;
    this.weight = data.weight;
  }

  static create(data: IoK8sApiCoreV1PreferredSchedulingTermModelOptions): IoK8sApiCoreV1PreferredSchedulingTermModel {
    return new IoK8sApiCoreV1PreferredSchedulingTermModel(data);
  }

  toObject(): Partial<this> {
    return {
      preference: this.preference,
      weight: this.weight,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1PreferredSchedulingTermModel;
