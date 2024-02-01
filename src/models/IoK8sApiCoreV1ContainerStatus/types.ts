import { IoK8sApiCoreV1ContainerStateModelOptions as IoK8sApiCoreV1ContainerState } from '../IoK8sApiCoreV1ContainerState';
import { IoK8sApiCoreV1ResourceRequirementsModelOptions as IoK8sApiCoreV1ResourceRequirements } from '../IoK8sApiCoreV1ResourceRequirements';

export interface IoK8sApiCoreV1ContainerStatusModelOptions {
  allocatedResources?: { [key: string]: string };
  containerID?: string;
  image: string;
  imageID: string;
  lastState?: IoK8sApiCoreV1ContainerState;
  name: string;
  ready: boolean;
  resources?: IoK8sApiCoreV1ResourceRequirements;
  restartCount: number;
  started?: boolean;
  state?: IoK8sApiCoreV1ContainerState;
}
