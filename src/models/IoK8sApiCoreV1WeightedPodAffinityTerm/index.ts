import { IoK8sApiCoreV1PodAffinityTermModelOptions as IoK8sApiCoreV1PodAffinityTerm } from '../IoK8sApiCoreV1PodAffinityTerm';
import { BaseModel } from '../types';
import type { IoK8sApiCoreV1WeightedPodAffinityTermModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1WeightedPodAffinityTermModel extends BaseModel {
  podAffinityTerm: IoK8sApiCoreV1PodAffinityTerm;
  // weight associated with matching the corresponding podAffinityTerm, in the range 1-100.
  weight: number;

  constructor(data: IoK8sApiCoreV1WeightedPodAffinityTermModelOptions) {
    super();
    validate(data);
    this.podAffinityTerm = data.podAffinityTerm;
    this.weight = data.weight;
  }

  static create(data: IoK8sApiCoreV1WeightedPodAffinityTermModelOptions): IoK8sApiCoreV1WeightedPodAffinityTermModel {
    return new IoK8sApiCoreV1WeightedPodAffinityTermModel(data);
  }

  toObject(): Partial<this> {
    return {
      podAffinityTerm: this.podAffinityTerm,
      weight: this.weight,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1WeightedPodAffinityTermModel;
