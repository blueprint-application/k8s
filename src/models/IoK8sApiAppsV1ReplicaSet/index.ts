import { IoK8sApiAppsV1ReplicaSetSpecModelOptions as IoK8sApiAppsV1ReplicaSetSpec } from '../IoK8sApiAppsV1ReplicaSetSpec';
import { IoK8sApiAppsV1ReplicaSetStatusModelOptions as IoK8sApiAppsV1ReplicaSetStatus } from '../IoK8sApiAppsV1ReplicaSetStatus';
import { IoK8sApimachineryPkgApisMetaV1ObjectMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from '../IoK8sApimachineryPkgApisMetaV1ObjectMeta';
import { BaseModel } from '../types';
import type { IoK8sApiAppsV1ReplicaSetModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiAppsV1ReplicaSetModel extends BaseModel {
  // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
  apiVersion?: string;
  // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  spec?: IoK8sApiAppsV1ReplicaSetSpec;
  status?: IoK8sApiAppsV1ReplicaSetStatus;

  constructor(data: IoK8sApiAppsV1ReplicaSetModelOptions) {
    super();
    validate(data);
    this.apiVersion = data.apiVersion;
    this.kind = data.kind;
    this.metadata = data.metadata;
    this.spec = data.spec;
    this.status = data.status;
  }

  static create(data: IoK8sApiAppsV1ReplicaSetModelOptions): IoK8sApiAppsV1ReplicaSetModel {
    return new IoK8sApiAppsV1ReplicaSetModel(data);
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

export default IoK8sApiAppsV1ReplicaSetModel;
