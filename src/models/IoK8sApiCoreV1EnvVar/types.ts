import { IoK8sApiCoreV1EnvVarSourceModelOptions as IoK8sApiCoreV1EnvVarSource } from '../IoK8sApiCoreV1EnvVarSource';

export interface IoK8sApiCoreV1EnvVarModelOptions {
  name: string;
  value?: string;
  valueFrom?: IoK8sApiCoreV1EnvVarSource;
}
