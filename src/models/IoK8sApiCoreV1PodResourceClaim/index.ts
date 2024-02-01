import { IoK8sApiCoreV1ClaimSourceModelOptions as IoK8sApiCoreV1ClaimSource } from '../IoK8sApiCoreV1ClaimSource';
import { BaseModel } from '../types';
import type { IoK8sApiCoreV1PodResourceClaimModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1PodResourceClaimModel extends BaseModel {
  // Name uniquely identifies this resource claim inside the pod. This must be a DNS_LABEL.
  name: string;
  source?: IoK8sApiCoreV1ClaimSource;

  constructor(data: IoK8sApiCoreV1PodResourceClaimModelOptions) {
    super();
    validate(data);
    this.name = data.name;
    this.source = data.source;
  }

  static create(data: IoK8sApiCoreV1PodResourceClaimModelOptions): IoK8sApiCoreV1PodResourceClaimModel {
    return new IoK8sApiCoreV1PodResourceClaimModel(data);
  }

  toObject(): Partial<this> {
    return {
      name: this.name,
      source: this.source,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1PodResourceClaimModel;
