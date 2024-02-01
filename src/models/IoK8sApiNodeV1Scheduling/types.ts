import { IoK8sApiCoreV1TolerationModelOptions as IoK8sApiCoreV1Toleration } from '../IoK8sApiCoreV1Toleration';

export interface IoK8sApiNodeV1SchedulingModelOptions {
  nodeSelector?: { [key: string]: string };
  tolerations?: Array<IoK8sApiCoreV1Toleration>;
}
