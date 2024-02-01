import { IoK8sApiCoreV1PodTemplateSpecModelOptions as IoK8sApiCoreV1PodTemplateSpec } from '../IoK8sApiCoreV1PodTemplateSpec';

export interface IoK8sApiCoreV1ReplicationControllerSpecModelOptions {
  minReadySeconds?: number;
  replicas?: number;
  selector?: { [key: string]: string };
  template?: IoK8sApiCoreV1PodTemplateSpec;
}
