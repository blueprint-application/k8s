import { IoK8sApiCoreV1ContainerStateRunningModelOptions as IoK8sApiCoreV1ContainerStateRunning } from '../IoK8sApiCoreV1ContainerStateRunning';
import { IoK8sApiCoreV1ContainerStateTerminatedModelOptions as IoK8sApiCoreV1ContainerStateTerminated } from '../IoK8sApiCoreV1ContainerStateTerminated';
import { IoK8sApiCoreV1ContainerStateWaitingModelOptions as IoK8sApiCoreV1ContainerStateWaiting } from '../IoK8sApiCoreV1ContainerStateWaiting';

export interface IoK8sApiCoreV1ContainerStateModelOptions {
  running?: IoK8sApiCoreV1ContainerStateRunning;
  terminated?: IoK8sApiCoreV1ContainerStateTerminated;
  waiting?: IoK8sApiCoreV1ContainerStateWaiting;
}
