import { IoK8sApiStorageV1VolumeNodeResourcesModelOptions as IoK8sApiStorageV1VolumeNodeResources } from '../IoK8sApiStorageV1VolumeNodeResources';

export interface IoK8sApiStorageV1CSINodeDriverModelOptions {
  allocatable?: IoK8sApiStorageV1VolumeNodeResources;
  name: string;
  nodeID: string;
  topologyKeys?: Array<string>;
}
