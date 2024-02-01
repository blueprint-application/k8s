import { IoK8sApimachineryPkgApisMetaV1ObjectMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from '../IoK8sApimachineryPkgApisMetaV1ObjectMeta';
import { BaseModel } from '../types';
import type { IoK8sApiStorageV1alpha1VolumeAttributesClassModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiStorageV1alpha1VolumeAttributesClassModel extends BaseModel {
  // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
  apiVersion?: string;
  // Name of the CSI driver This field is immutable.
  driverName: string;
  // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  // parameters hold volume attributes defined by the CSI driver. These values are opaque to the Kubernetes and are passed directly to the CSI driver. The underlying storage provider supports changing these attributes on an existing volume, however the parameters field itself is immutable. To invoke a volume update, a new VolumeAttributesClass should be created with new parameters, and the PersistentVolumeClaim should be updated to reference the new VolumeAttributesClass.  This field is required and must contain at least one key/value pair. The keys cannot be empty, and the maximum number of parameters is 512, with a cumulative max size of 256K. If the CSI driver rejects invalid parameters, the target PersistentVolumeClaim will be set to an \"Infeasible\" state in the modifyVolumeStatus field.
  parameters?: { [key: string]: string };

  constructor(data: IoK8sApiStorageV1alpha1VolumeAttributesClassModelOptions) {
    super();
    validate(data);
    this.apiVersion = data.apiVersion;
    this.driverName = data.driverName;
    this.kind = data.kind;
    this.metadata = data.metadata;
    this.parameters = data.parameters;
  }

  static create(
    data: IoK8sApiStorageV1alpha1VolumeAttributesClassModelOptions,
  ): IoK8sApiStorageV1alpha1VolumeAttributesClassModel {
    return new IoK8sApiStorageV1alpha1VolumeAttributesClassModel(data);
  }

  toObject(): Partial<this> {
    return {
      apiVersion: this.apiVersion,
      driverName: this.driverName,
      kind: this.kind,
      metadata: this.metadata,
      parameters: this.parameters,
    } as Partial<this>;
  }
}

export default IoK8sApiStorageV1alpha1VolumeAttributesClassModel;
