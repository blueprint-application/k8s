import { BaseModel } from '../types';
import type { IoK8sApiCoreV1TaintModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1TaintModel extends BaseModel {
  // Required. The effect of the taint on pods that do not tolerate the taint. Valid effects are NoSchedule, PreferNoSchedule and NoExecute.
  effect: string;
  // Required. The taint key to be applied to a node.
  key: string;
  // Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
  timeAdded?: Date;
  // The taint value corresponding to the taint key.
  value?: string;

  constructor(data: IoK8sApiCoreV1TaintModelOptions) {
    super();
    validate(data);
    this.effect = data.effect;
    this.key = data.key;
    this.timeAdded = data.timeAdded;
    this.value = data.value;
  }

  static create(data: IoK8sApiCoreV1TaintModelOptions): IoK8sApiCoreV1TaintModel {
    return new IoK8sApiCoreV1TaintModel(data);
  }

  toObject(): Partial<this> {
    return {
      effect: this.effect,
      key: this.key,
      timeAdded: this.timeAdded,
      value: this.value,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1TaintModel;
