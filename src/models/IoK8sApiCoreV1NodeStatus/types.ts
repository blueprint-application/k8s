import { IoK8sApiCoreV1AttachedVolumeModelOptions as IoK8sApiCoreV1AttachedVolume } from '../IoK8sApiCoreV1AttachedVolume';
import { IoK8sApiCoreV1ContainerImageModelOptions as IoK8sApiCoreV1ContainerImage } from '../IoK8sApiCoreV1ContainerImage';
import { IoK8sApiCoreV1NodeAddressModelOptions as IoK8sApiCoreV1NodeAddress } from '../IoK8sApiCoreV1NodeAddress';
import { IoK8sApiCoreV1NodeConditionModelOptions as IoK8sApiCoreV1NodeCondition } from '../IoK8sApiCoreV1NodeCondition';
import { IoK8sApiCoreV1NodeConfigStatusModelOptions as IoK8sApiCoreV1NodeConfigStatus } from '../IoK8sApiCoreV1NodeConfigStatus';
import { IoK8sApiCoreV1NodeDaemonEndpointsModelOptions as IoK8sApiCoreV1NodeDaemonEndpoints } from '../IoK8sApiCoreV1NodeDaemonEndpoints';
import { IoK8sApiCoreV1NodeSystemInfoModelOptions as IoK8sApiCoreV1NodeSystemInfo } from '../IoK8sApiCoreV1NodeSystemInfo';

export interface IoK8sApiCoreV1NodeStatusModelOptions {
  addresses?: Array<IoK8sApiCoreV1NodeAddress>;
  allocatable?: { [key: string]: string };
  capacity?: { [key: string]: string };
  conditions?: Array<IoK8sApiCoreV1NodeCondition>;
  config?: IoK8sApiCoreV1NodeConfigStatus;
  daemonEndpoints?: IoK8sApiCoreV1NodeDaemonEndpoints;
  images?: Array<IoK8sApiCoreV1ContainerImage>;
  nodeInfo?: IoK8sApiCoreV1NodeSystemInfo;
  phase?: string;
  volumesAttached?: Array<IoK8sApiCoreV1AttachedVolume>;
  volumesInUse?: Array<string>;
}
