import { IoK8sApiResourceV1alpha2ResourceClaimSchedulingStatusModelOptions as IoK8sApiResourceV1alpha2ResourceClaimSchedulingStatus } from '../IoK8sApiResourceV1alpha2ResourceClaimSchedulingStatus';
import { BaseModel } from '../types';
import type { IoK8sApiResourceV1alpha2PodSchedulingContextStatusModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiResourceV1alpha2PodSchedulingContextStatusModel extends BaseModel {
  // ResourceClaims describes resource availability for each pod.spec.resourceClaim entry where the corresponding ResourceClaim uses \"WaitForFirstConsumer\" allocation mode.
  resourceClaims?: Array<IoK8sApiResourceV1alpha2ResourceClaimSchedulingStatus>;

  constructor(data: IoK8sApiResourceV1alpha2PodSchedulingContextStatusModelOptions) {
    super();
    validate(data);
    this.resourceClaims = data.resourceClaims;
  }

  static create(
    data: IoK8sApiResourceV1alpha2PodSchedulingContextStatusModelOptions,
  ): IoK8sApiResourceV1alpha2PodSchedulingContextStatusModel {
    return new IoK8sApiResourceV1alpha2PodSchedulingContextStatusModel(data);
  }

  toObject(): Partial<this> {
    return {
      resourceClaims: this.resourceClaims,
    } as Partial<this>;
  }
}

export default IoK8sApiResourceV1alpha2PodSchedulingContextStatusModel;
