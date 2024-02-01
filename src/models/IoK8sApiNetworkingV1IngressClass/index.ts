import { IoK8sApiNetworkingV1IngressClassSpecModelOptions as IoK8sApiNetworkingV1IngressClassSpec } from '../IoK8sApiNetworkingV1IngressClassSpec';
import { IoK8sApimachineryPkgApisMetaV1ObjectMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from '../IoK8sApimachineryPkgApisMetaV1ObjectMeta';
import { BaseModel } from '../types';
import type { IoK8sApiNetworkingV1IngressClassModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiNetworkingV1IngressClassModel extends BaseModel {
  // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
  apiVersion?: string;
  // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  spec?: IoK8sApiNetworkingV1IngressClassSpec;

  constructor(data: IoK8sApiNetworkingV1IngressClassModelOptions) {
    super();
    validate(data);
    this.apiVersion = data.apiVersion;
    this.kind = data.kind;
    this.metadata = data.metadata;
    this.spec = data.spec;
  }

  static create(data: IoK8sApiNetworkingV1IngressClassModelOptions): IoK8sApiNetworkingV1IngressClassModel {
    return new IoK8sApiNetworkingV1IngressClassModel(data);
  }

  toObject(): Partial<this> {
    return {
      apiVersion: this.apiVersion,
      kind: this.kind,
      metadata: this.metadata,
      spec: this.spec,
    } as Partial<this>;
  }
}

export default IoK8sApiNetworkingV1IngressClassModel;
