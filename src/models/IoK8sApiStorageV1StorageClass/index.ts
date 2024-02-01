import { IoK8sApiCoreV1TopologySelectorTermModelOptions as IoK8sApiCoreV1TopologySelectorTerm } from '../IoK8sApiCoreV1TopologySelectorTerm';
import { IoK8sApimachineryPkgApisMetaV1ObjectMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from '../IoK8sApimachineryPkgApisMetaV1ObjectMeta';
import { BaseModel } from '../types';
import type { IoK8sApiStorageV1StorageClassModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiStorageV1StorageClassModel extends BaseModel {
  // allowVolumeExpansion shows whether the storage class allow volume expand.
  allowVolumeExpansion?: boolean;
  // allowedTopologies restrict the node topologies where volumes can be dynamically provisioned. Each volume plugin defines its own supported topology specifications. An empty TopologySelectorTerm list means there is no topology restriction. This field is only honored by servers that enable the VolumeScheduling feature.
  allowedTopologies?: Array<IoK8sApiCoreV1TopologySelectorTerm>;
  // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
  apiVersion?: string;
  // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  // mountOptions controls the mountOptions for dynamically provisioned PersistentVolumes of this storage class. e.g. [\"ro\", \"soft\"]. Not validated - mount of the PVs will simply fail if one is invalid.
  mountOptions?: Array<string>;
  // parameters holds the parameters for the provisioner that should create volumes of this storage class.
  parameters?: { [key: string]: string };
  // provisioner indicates the type of the provisioner.
  provisioner: string;
  // reclaimPolicy controls the reclaimPolicy for dynamically provisioned PersistentVolumes of this storage class. Defaults to Delete.
  reclaimPolicy?: string;
  // volumeBindingMode indicates how PersistentVolumeClaims should be provisioned and bound.  When unset, VolumeBindingImmediate is used. This field is only honored by servers that enable the VolumeScheduling feature.
  volumeBindingMode?: string;

  constructor(data: IoK8sApiStorageV1StorageClassModelOptions) {
    super();
    validate(data);
    this.allowVolumeExpansion = data.allowVolumeExpansion;
    this.allowedTopologies = data.allowedTopologies;
    this.apiVersion = data.apiVersion;
    this.kind = data.kind;
    this.metadata = data.metadata;
    this.mountOptions = data.mountOptions;
    this.parameters = data.parameters;
    this.provisioner = data.provisioner;
    this.reclaimPolicy = data.reclaimPolicy;
    this.volumeBindingMode = data.volumeBindingMode;
  }

  static create(data: IoK8sApiStorageV1StorageClassModelOptions): IoK8sApiStorageV1StorageClassModel {
    return new IoK8sApiStorageV1StorageClassModel(data);
  }

  toObject(): Partial<this> {
    return {
      allowVolumeExpansion: this.allowVolumeExpansion,
      allowedTopologies: this.allowedTopologies,
      apiVersion: this.apiVersion,
      kind: this.kind,
      metadata: this.metadata,
      mountOptions: this.mountOptions,
      parameters: this.parameters,
      provisioner: this.provisioner,
      reclaimPolicy: this.reclaimPolicy,
      volumeBindingMode: this.volumeBindingMode,
    } as Partial<this>;
  }
}

export default IoK8sApiStorageV1StorageClassModel;
