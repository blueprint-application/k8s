import { IoK8sApiCoreV1TypedLocalObjectReferenceModelOptions as IoK8sApiCoreV1TypedLocalObjectReference } from '../IoK8sApiCoreV1TypedLocalObjectReference';
import { IoK8sApiCoreV1TypedObjectReferenceModelOptions as IoK8sApiCoreV1TypedObjectReference } from '../IoK8sApiCoreV1TypedObjectReference';
import { IoK8sApiCoreV1VolumeResourceRequirementsModelOptions as IoK8sApiCoreV1VolumeResourceRequirements } from '../IoK8sApiCoreV1VolumeResourceRequirements';
import { IoK8sApimachineryPkgApisMetaV1LabelSelectorModelOptions as IoK8sApimachineryPkgApisMetaV1LabelSelector } from '../IoK8sApimachineryPkgApisMetaV1LabelSelector';
import { BaseModel } from '../types';
import type { IoK8sApiCoreV1PersistentVolumeClaimSpecModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1PersistentVolumeClaimSpecModel extends BaseModel {
  // accessModes contains the desired access modes the volume should have. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
  accessModes?: Array<string>;
  dataSource?: IoK8sApiCoreV1TypedLocalObjectReference;
  dataSourceRef?: IoK8sApiCoreV1TypedObjectReference;
  resources?: IoK8sApiCoreV1VolumeResourceRequirements;
  selector?: IoK8sApimachineryPkgApisMetaV1LabelSelector;
  // storageClassName is the name of the StorageClass required by the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1
  storageClassName?: string;
  // volumeAttributesClassName may be used to set the VolumeAttributesClass used by this claim. If specified, the CSI driver will create or update the volume with the attributes defined in the corresponding VolumeAttributesClass. This has a different purpose than storageClassName, it can be changed after the claim is created. An empty string value means that no VolumeAttributesClass will be applied to the claim but it\'s not allowed to reset this field to empty string once it is set. If unspecified and the PersistentVolumeClaim is unbound, the default VolumeAttributesClass will be set by the persistentvolume controller if it exists. If the resource referred to by volumeAttributesClass does not exist, this PersistentVolumeClaim will be set to a Pending state, as reflected by the modifyVolumeStatus field, until such as a resource exists. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#volumeattributesclass (Alpha) Using this field requires the VolumeAttributesClass feature gate to be enabled.
  volumeAttributesClassName?: string;
  // volumeMode defines what type of volume is required by the claim. Value of Filesystem is implied when not included in claim spec.
  volumeMode?: string;
  // volumeName is the binding reference to the PersistentVolume backing this claim.
  volumeName?: string;

  constructor(data: IoK8sApiCoreV1PersistentVolumeClaimSpecModelOptions) {
    super();
    validate(data);
    this.accessModes = data.accessModes;
    this.dataSource = data.dataSource;
    this.dataSourceRef = data.dataSourceRef;
    this.resources = data.resources;
    this.selector = data.selector;
    this.storageClassName = data.storageClassName;
    this.volumeAttributesClassName = data.volumeAttributesClassName;
    this.volumeMode = data.volumeMode;
    this.volumeName = data.volumeName;
  }

  static create(
    data: IoK8sApiCoreV1PersistentVolumeClaimSpecModelOptions,
  ): IoK8sApiCoreV1PersistentVolumeClaimSpecModel {
    return new IoK8sApiCoreV1PersistentVolumeClaimSpecModel(data);
  }

  toObject(): Partial<this> {
    return {
      accessModes: this.accessModes,
      dataSource: this.dataSource,
      dataSourceRef: this.dataSourceRef,
      resources: this.resources,
      selector: this.selector,
      storageClassName: this.storageClassName,
      volumeAttributesClassName: this.volumeAttributesClassName,
      volumeMode: this.volumeMode,
      volumeName: this.volumeName,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1PersistentVolumeClaimSpecModel;
