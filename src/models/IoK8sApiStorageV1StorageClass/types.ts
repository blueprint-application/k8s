import { IoK8sApiCoreV1TopologySelectorTermModelOptions as IoK8sApiCoreV1TopologySelectorTerm } from '../IoK8sApiCoreV1TopologySelectorTerm';
import { IoK8sApimachineryPkgApisMetaV1ObjectMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from '../IoK8sApimachineryPkgApisMetaV1ObjectMeta';

export interface IoK8sApiStorageV1StorageClassModelOptions {
  allowVolumeExpansion?: boolean;
  allowedTopologies?: Array<IoK8sApiCoreV1TopologySelectorTerm>;
  apiVersion?: string;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  mountOptions?: Array<string>;
  parameters?: { [key: string]: string };
  provisioner: string;
  reclaimPolicy?: string;
  volumeBindingMode?: string;
}
