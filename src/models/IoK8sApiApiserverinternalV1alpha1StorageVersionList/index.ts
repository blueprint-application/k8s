import { IoK8sApiApiserverinternalV1alpha1StorageVersionModelOptions as IoK8sApiApiserverinternalV1alpha1StorageVersion } from '../IoK8sApiApiserverinternalV1alpha1StorageVersion';
import { IoK8sApimachineryPkgApisMetaV1ListMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ListMeta } from '../IoK8sApimachineryPkgApisMetaV1ListMeta';
import { BaseModel } from '../types';
import type { IoK8sApiApiserverinternalV1alpha1StorageVersionListModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiApiserverinternalV1alpha1StorageVersionListModel extends BaseModel {
  // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
  apiVersion?: string;
  // Items holds a list of StorageVersion
  items: Array<IoK8sApiApiserverinternalV1alpha1StorageVersion>;
  // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;

  constructor(data: IoK8sApiApiserverinternalV1alpha1StorageVersionListModelOptions) {
    super();
    validate(data);
    this.apiVersion = data.apiVersion;
    this.items = data.items;
    this.kind = data.kind;
    this.metadata = data.metadata;
  }

  static create(
    data: IoK8sApiApiserverinternalV1alpha1StorageVersionListModelOptions,
  ): IoK8sApiApiserverinternalV1alpha1StorageVersionListModel {
    return new IoK8sApiApiserverinternalV1alpha1StorageVersionListModel(data);
  }

  toObject(): Partial<this> {
    return {
      apiVersion: this.apiVersion,
      items: this.items,
      kind: this.kind,
      metadata: this.metadata,
    } as Partial<this>;
  }
}

export default IoK8sApiApiserverinternalV1alpha1StorageVersionListModel;
