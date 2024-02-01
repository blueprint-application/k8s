import { IoK8sApiCoreV1ContainerStatusModelOptions as IoK8sApiCoreV1ContainerStatus } from '../IoK8sApiCoreV1ContainerStatus';
import { IoK8sApiCoreV1HostIPModelOptions as IoK8sApiCoreV1HostIP } from '../IoK8sApiCoreV1HostIP';
import { IoK8sApiCoreV1PodConditionModelOptions as IoK8sApiCoreV1PodCondition } from '../IoK8sApiCoreV1PodCondition';
import { IoK8sApiCoreV1PodIPModelOptions as IoK8sApiCoreV1PodIP } from '../IoK8sApiCoreV1PodIP';
import { IoK8sApiCoreV1PodResourceClaimStatusModelOptions as IoK8sApiCoreV1PodResourceClaimStatus } from '../IoK8sApiCoreV1PodResourceClaimStatus';

export interface IoK8sApiCoreV1PodStatusModelOptions {
  conditions?: Array<IoK8sApiCoreV1PodCondition>;
  containerStatuses?: Array<IoK8sApiCoreV1ContainerStatus>;
  ephemeralContainerStatuses?: Array<IoK8sApiCoreV1ContainerStatus>;
  hostIP?: string;
  hostIPs?: Array<IoK8sApiCoreV1HostIP>;
  initContainerStatuses?: Array<IoK8sApiCoreV1ContainerStatus>;
  message?: string;
  nominatedNodeName?: string;
  phase?: string;
  podIP?: string;
  podIPs?: Array<IoK8sApiCoreV1PodIP>;
  qosClass?: string;
  reason?: string;
  resize?: string;
  resourceClaimStatuses?: Array<IoK8sApiCoreV1PodResourceClaimStatus>;
  startTime?: Date;
}
