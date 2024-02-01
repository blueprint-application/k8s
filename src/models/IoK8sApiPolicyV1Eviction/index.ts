import { IoK8sApimachineryPkgApisMetaV1DeleteOptionsModelOptions as IoK8sApimachineryPkgApisMetaV1DeleteOptions } from '../IoK8sApimachineryPkgApisMetaV1DeleteOptions';
import { IoK8sApimachineryPkgApisMetaV1ObjectMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from '../IoK8sApimachineryPkgApisMetaV1ObjectMeta';
import { BaseModel } from '../types';
import type { IoK8sApiPolicyV1EvictionModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiPolicyV1EvictionModel extends BaseModel {
  // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
  apiVersion?: string;
  deleteOptions?: IoK8sApimachineryPkgApisMetaV1DeleteOptions;
  // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;

  constructor(data: IoK8sApiPolicyV1EvictionModelOptions) {
    super();
    validate(data);
    this.apiVersion = data.apiVersion;
    this.deleteOptions = data.deleteOptions;
    this.kind = data.kind;
    this.metadata = data.metadata;
  }

  static create(data: IoK8sApiPolicyV1EvictionModelOptions): IoK8sApiPolicyV1EvictionModel {
    return new IoK8sApiPolicyV1EvictionModel(data);
  }

  toObject(): Partial<this> {
    return {
      apiVersion: this.apiVersion,
      deleteOptions: this.deleteOptions,
      kind: this.kind,
      metadata: this.metadata,
    } as Partial<this>;
  }
}

export default IoK8sApiPolicyV1EvictionModel;
