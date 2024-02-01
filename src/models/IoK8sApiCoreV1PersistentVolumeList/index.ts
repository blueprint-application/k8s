import { IoK8sApiCoreV1PersistentVolumeModelOptions as IoK8sApiCoreV1PersistentVolume } from '../IoK8sApiCoreV1PersistentVolume';
import { IoK8sApimachineryPkgApisMetaV1ListMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ListMeta } from '../IoK8sApimachineryPkgApisMetaV1ListMeta';
import { BaseModel } from '../types';
import type { IoK8sApiCoreV1PersistentVolumeListModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1PersistentVolumeListModel extends BaseModel {
  // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
  apiVersion?: string;
  // items is a list of persistent volumes. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes
  items: Array<IoK8sApiCoreV1PersistentVolume>;
  // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;

  constructor(data: IoK8sApiCoreV1PersistentVolumeListModelOptions) {
    super();
    validate(data);
    this.apiVersion = data.apiVersion;
    this.items = data.items;
    this.kind = data.kind;
    this.metadata = data.metadata;
  }

  static create(data: IoK8sApiCoreV1PersistentVolumeListModelOptions): IoK8sApiCoreV1PersistentVolumeListModel {
    return new IoK8sApiCoreV1PersistentVolumeListModel(data);
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

export default IoK8sApiCoreV1PersistentVolumeListModel;
