import { IoK8sApiNetworkingV1alpha1ServiceCIDRSpecModelOptions as IoK8sApiNetworkingV1alpha1ServiceCIDRSpec } from '../IoK8sApiNetworkingV1alpha1ServiceCIDRSpec';
import { IoK8sApiNetworkingV1alpha1ServiceCIDRStatusModelOptions as IoK8sApiNetworkingV1alpha1ServiceCIDRStatus } from '../IoK8sApiNetworkingV1alpha1ServiceCIDRStatus';
import { IoK8sApimachineryPkgApisMetaV1ObjectMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from '../IoK8sApimachineryPkgApisMetaV1ObjectMeta';
import { BaseModel } from '../types';
import type { IoK8sApiNetworkingV1alpha1ServiceCIDRModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiNetworkingV1alpha1ServiceCIDRModel extends BaseModel {
  // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
  apiVersion?: string;
  // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  spec?: IoK8sApiNetworkingV1alpha1ServiceCIDRSpec;
  status?: IoK8sApiNetworkingV1alpha1ServiceCIDRStatus;

  constructor(data: IoK8sApiNetworkingV1alpha1ServiceCIDRModelOptions) {
    super();
    validate(data);
    this.apiVersion = data.apiVersion;
    this.kind = data.kind;
    this.metadata = data.metadata;
    this.spec = data.spec;
    this.status = data.status;
  }

  static create(data: IoK8sApiNetworkingV1alpha1ServiceCIDRModelOptions): IoK8sApiNetworkingV1alpha1ServiceCIDRModel {
    return new IoK8sApiNetworkingV1alpha1ServiceCIDRModel(data);
  }

  toObject(): Partial<this> {
    return {
      apiVersion: this.apiVersion,
      kind: this.kind,
      metadata: this.metadata,
      spec: this.spec,
      status: this.status,
    } as Partial<this>;
  }
}

export default IoK8sApiNetworkingV1alpha1ServiceCIDRModel;
