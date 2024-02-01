import { IoK8sApiStorageV1CSIDriverSpecModelOptions as IoK8sApiStorageV1CSIDriverSpec } from '../IoK8sApiStorageV1CSIDriverSpec';
import { IoK8sApimachineryPkgApisMetaV1ObjectMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from '../IoK8sApimachineryPkgApisMetaV1ObjectMeta';
import { BaseModel } from '../types';
import type { IoK8sApiStorageV1CSIDriverModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiStorageV1CSIDriverModel extends BaseModel {
  // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
  apiVersion?: string;
  // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  spec: IoK8sApiStorageV1CSIDriverSpec;

  constructor(data: IoK8sApiStorageV1CSIDriverModelOptions) {
    super();
    validate(data);
    this.apiVersion = data.apiVersion;
    this.kind = data.kind;
    this.metadata = data.metadata;
    this.spec = data.spec;
  }

  static create(data: IoK8sApiStorageV1CSIDriverModelOptions): IoK8sApiStorageV1CSIDriverModel {
    return new IoK8sApiStorageV1CSIDriverModel(data);
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

export default IoK8sApiStorageV1CSIDriverModel;
