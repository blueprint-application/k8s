import { IoK8sApiApiserverinternalV1alpha1StorageVersionStatusModelOptions as IoK8sApiApiserverinternalV1alpha1StorageVersionStatus } from '../IoK8sApiApiserverinternalV1alpha1StorageVersionStatus';
import { IoK8sApimachineryPkgApisMetaV1ObjectMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from '../IoK8sApimachineryPkgApisMetaV1ObjectMeta';
import { BaseModel } from '../types';
import type { IoK8sApiApiserverinternalV1alpha1StorageVersionModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiApiserverinternalV1alpha1StorageVersionModel extends BaseModel {
  // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
  apiVersion?: string;
  // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  // StorageVersionSpec is an empty spec.
  spec: any;
  status: IoK8sApiApiserverinternalV1alpha1StorageVersionStatus;

  constructor(data: IoK8sApiApiserverinternalV1alpha1StorageVersionModelOptions) {
    super();
    validate(data);
    this.apiVersion = data.apiVersion;
    this.kind = data.kind;
    this.metadata = data.metadata;
    this.spec = data.spec;
    this.status = data.status;
  }

  static create(
    data: IoK8sApiApiserverinternalV1alpha1StorageVersionModelOptions,
  ): IoK8sApiApiserverinternalV1alpha1StorageVersionModel {
    return new IoK8sApiApiserverinternalV1alpha1StorageVersionModel(data);
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

export default IoK8sApiApiserverinternalV1alpha1StorageVersionModel;
