import { IoK8sApiBatchV1JobSpecModelOptions as IoK8sApiBatchV1JobSpec } from '../IoK8sApiBatchV1JobSpec';
import { IoK8sApiBatchV1JobStatusModelOptions as IoK8sApiBatchV1JobStatus } from '../IoK8sApiBatchV1JobStatus';
import { IoK8sApimachineryPkgApisMetaV1ObjectMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from '../IoK8sApimachineryPkgApisMetaV1ObjectMeta';
import { BaseModel } from '../types';
import type { IoK8sApiBatchV1JobModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiBatchV1JobModel extends BaseModel {
  // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
  apiVersion?: string;
  // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  spec?: IoK8sApiBatchV1JobSpec;
  status?: IoK8sApiBatchV1JobStatus;

  constructor(data: IoK8sApiBatchV1JobModelOptions) {
    super();
    validate(data);
    this.apiVersion = data.apiVersion;
    this.kind = data.kind;
    this.metadata = data.metadata;
    this.spec = data.spec;
    this.status = data.status;
  }

  static create(data: IoK8sApiBatchV1JobModelOptions): IoK8sApiBatchV1JobModel {
    return new IoK8sApiBatchV1JobModel(data);
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

export default IoK8sApiBatchV1JobModel;
