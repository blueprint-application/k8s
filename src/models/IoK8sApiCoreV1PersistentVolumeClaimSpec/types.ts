import { IoK8sApiCoreV1TypedLocalObjectReferenceModelOptions as IoK8sApiCoreV1TypedLocalObjectReference } from '../IoK8sApiCoreV1TypedLocalObjectReference';
import { IoK8sApiCoreV1TypedObjectReferenceModelOptions as IoK8sApiCoreV1TypedObjectReference } from '../IoK8sApiCoreV1TypedObjectReference';
import { IoK8sApiCoreV1VolumeResourceRequirementsModelOptions as IoK8sApiCoreV1VolumeResourceRequirements } from '../IoK8sApiCoreV1VolumeResourceRequirements';
import { IoK8sApimachineryPkgApisMetaV1LabelSelectorModelOptions as IoK8sApimachineryPkgApisMetaV1LabelSelector } from '../IoK8sApimachineryPkgApisMetaV1LabelSelector';

export interface IoK8sApiCoreV1PersistentVolumeClaimSpecModelOptions {
  accessModes?: Array<string>;
  dataSource?: IoK8sApiCoreV1TypedLocalObjectReference;
  dataSourceRef?: IoK8sApiCoreV1TypedObjectReference;
  resources?: IoK8sApiCoreV1VolumeResourceRequirements;
  selector?: IoK8sApimachineryPkgApisMetaV1LabelSelector;
  storageClassName?: string;
  volumeAttributesClassName?: string;
  volumeMode?: string;
  volumeName?: string;
}
