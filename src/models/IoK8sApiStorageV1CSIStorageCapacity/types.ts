import { IoK8sApimachineryPkgApisMetaV1LabelSelectorModelOptions as IoK8sApimachineryPkgApisMetaV1LabelSelector } from '../IoK8sApimachineryPkgApisMetaV1LabelSelector';
import { IoK8sApimachineryPkgApisMetaV1ObjectMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from '../IoK8sApimachineryPkgApisMetaV1ObjectMeta';

export interface IoK8sApiStorageV1CSIStorageCapacityModelOptions {
  apiVersion?: string;
  capacity?: string;
  kind?: string;
  maximumVolumeSize?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  nodeTopology?: IoK8sApimachineryPkgApisMetaV1LabelSelector;
  storageClassName: string;
}
