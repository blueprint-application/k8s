import { IoK8sApiCoreV1ConfigMapEnvSourceModelOptions as IoK8sApiCoreV1ConfigMapEnvSource } from '../IoK8sApiCoreV1ConfigMapEnvSource';
import { IoK8sApiCoreV1SecretEnvSourceModelOptions as IoK8sApiCoreV1SecretEnvSource } from '../IoK8sApiCoreV1SecretEnvSource';

export interface IoK8sApiCoreV1EnvFromSourceModelOptions {
  configMapRef?: IoK8sApiCoreV1ConfigMapEnvSource;
  prefix?: string;
  secretRef?: IoK8sApiCoreV1SecretEnvSource;
}
