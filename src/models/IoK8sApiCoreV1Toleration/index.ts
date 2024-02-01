import { BaseModel } from '../types';
import type { IoK8sApiCoreV1TolerationModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1TolerationModel extends BaseModel {
  // Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.
  effect?: string;
  // Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys.
  key?: string;
  // Operator represents a key\'s relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category.
  operator?: string;
  // TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system.
  tolerationSeconds?: number;
  // Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string.
  value?: string;

  constructor(data: IoK8sApiCoreV1TolerationModelOptions) {
    super();
    validate(data);
    this.effect = data.effect;
    this.key = data.key;
    this.operator = data.operator;
    this.tolerationSeconds = data.tolerationSeconds;
    this.value = data.value;
  }

  static create(data: IoK8sApiCoreV1TolerationModelOptions): IoK8sApiCoreV1TolerationModel {
    return new IoK8sApiCoreV1TolerationModel(data);
  }

  toObject(): Partial<this> {
    return {
      effect: this.effect,
      key: this.key,
      operator: this.operator,
      tolerationSeconds: this.tolerationSeconds,
      value: this.value,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1TolerationModel;
