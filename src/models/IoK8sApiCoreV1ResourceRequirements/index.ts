import { IoK8sApiCoreV1ResourceClaimModelOptions as IoK8sApiCoreV1ResourceClaim } from '../IoK8sApiCoreV1ResourceClaim';
import { BaseModel } from '../types';
import type { IoK8sApiCoreV1ResourceRequirementsModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1ResourceRequirementsModel extends BaseModel {
  // Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container.  This is an alpha field and requires enabling the DynamicResourceAllocation feature gate.  This field is immutable. It can only be set for containers.
  claims?: Array<IoK8sApiCoreV1ResourceClaim>;
  // Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  limits?: { [key: string]: string };
  // Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  requests?: { [key: string]: string };

  constructor(data: IoK8sApiCoreV1ResourceRequirementsModelOptions) {
    super();
    validate(data);
    this.claims = data.claims;
    this.limits = data.limits;
    this.requests = data.requests;
  }

  static create(data: IoK8sApiCoreV1ResourceRequirementsModelOptions): IoK8sApiCoreV1ResourceRequirementsModel {
    return new IoK8sApiCoreV1ResourceRequirementsModel(data);
  }

  toObject(): Partial<this> {
    return {
      claims: this.claims,
      limits: this.limits,
      requests: this.requests,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1ResourceRequirementsModel;
