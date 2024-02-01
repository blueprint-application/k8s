import { IoK8sApiCoordinationV1LeaseSpecModelOptions as IoK8sApiCoordinationV1LeaseSpec } from '../IoK8sApiCoordinationV1LeaseSpec';
import { IoK8sApimachineryPkgApisMetaV1ObjectMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from '../IoK8sApimachineryPkgApisMetaV1ObjectMeta';
import { BaseModel } from '../types';
import type { IoK8sApiCoordinationV1LeaseModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoordinationV1LeaseModel extends BaseModel {
  // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
  apiVersion?: string;
  // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  spec?: IoK8sApiCoordinationV1LeaseSpec;

  constructor(data: IoK8sApiCoordinationV1LeaseModelOptions) {
    super();
    validate(data);
    this.apiVersion = data.apiVersion;
    this.kind = data.kind;
    this.metadata = data.metadata;
    this.spec = data.spec;
  }

  static create(data: IoK8sApiCoordinationV1LeaseModelOptions): IoK8sApiCoordinationV1LeaseModel {
    return new IoK8sApiCoordinationV1LeaseModel(data);
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

export default IoK8sApiCoordinationV1LeaseModel;
