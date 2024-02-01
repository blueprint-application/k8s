import { BaseModel } from '../types';
import type { IoK8sApiCoreV1PodResourceClaimStatusModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1PodResourceClaimStatusModel extends BaseModel {
  // Name uniquely identifies this resource claim inside the pod. This must match the name of an entry in pod.spec.resourceClaims, which implies that the string must be a DNS_LABEL.
  name: string;
  // ResourceClaimName is the name of the ResourceClaim that was generated for the Pod in the namespace of the Pod. It this is unset, then generating a ResourceClaim was not necessary. The pod.spec.resourceClaims entry can be ignored in this case.
  resourceClaimName?: string;

  constructor(data: IoK8sApiCoreV1PodResourceClaimStatusModelOptions) {
    super();
    validate(data);
    this.name = data.name;
    this.resourceClaimName = data.resourceClaimName;
  }

  static create(data: IoK8sApiCoreV1PodResourceClaimStatusModelOptions): IoK8sApiCoreV1PodResourceClaimStatusModel {
    return new IoK8sApiCoreV1PodResourceClaimStatusModel(data);
  }

  toObject(): Partial<this> {
    return {
      name: this.name,
      resourceClaimName: this.resourceClaimName,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1PodResourceClaimStatusModel;
