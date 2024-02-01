import { IoK8sApiCoreV1ConfigMapKeySelectorModelOptions as IoK8sApiCoreV1ConfigMapKeySelector } from '../IoK8sApiCoreV1ConfigMapKeySelector';
import { IoK8sApiCoreV1ObjectFieldSelectorModelOptions as IoK8sApiCoreV1ObjectFieldSelector } from '../IoK8sApiCoreV1ObjectFieldSelector';
import { IoK8sApiCoreV1ResourceFieldSelectorModelOptions as IoK8sApiCoreV1ResourceFieldSelector } from '../IoK8sApiCoreV1ResourceFieldSelector';
import { IoK8sApiCoreV1SecretKeySelectorModelOptions as IoK8sApiCoreV1SecretKeySelector } from '../IoK8sApiCoreV1SecretKeySelector';

export interface IoK8sApiCoreV1EnvVarSourceModelOptions {
  configMapKeyRef?: IoK8sApiCoreV1ConfigMapKeySelector;
  fieldRef?: IoK8sApiCoreV1ObjectFieldSelector;
  resourceFieldRef?: IoK8sApiCoreV1ResourceFieldSelector;
  secretKeyRef?: IoK8sApiCoreV1SecretKeySelector;
}
