import { IoK8sApiNetworkingV1IngressSpecModelOptions as IoK8sApiNetworkingV1IngressSpec } from '../IoK8sApiNetworkingV1IngressSpec';
import { IoK8sApiNetworkingV1IngressStatusModelOptions as IoK8sApiNetworkingV1IngressStatus } from '../IoK8sApiNetworkingV1IngressStatus';
import { IoK8sApimachineryPkgApisMetaV1ObjectMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from '../IoK8sApimachineryPkgApisMetaV1ObjectMeta';
import { BaseModel } from '../types';
import type { IoK8sApiNetworkingV1IngressModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiNetworkingV1IngressModel extends BaseModel {
  // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
  apiVersion?: string;
  // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  spec?: IoK8sApiNetworkingV1IngressSpec;
  status?: IoK8sApiNetworkingV1IngressStatus;

  constructor(data: IoK8sApiNetworkingV1IngressModelOptions) {
    super();
    validate(data);
    this.apiVersion = data.apiVersion;
    this.kind = data.kind;
    this.metadata = data.metadata;
    this.spec = data.spec;
    this.status = data.status;
  }

  static create(data: IoK8sApiNetworkingV1IngressModelOptions): IoK8sApiNetworkingV1IngressModel {
    return new IoK8sApiNetworkingV1IngressModel(data);
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

export default IoK8sApiNetworkingV1IngressModel;
