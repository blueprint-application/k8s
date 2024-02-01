import { IoK8sApiCoreV1ObjectFieldSelectorModelOptions as IoK8sApiCoreV1ObjectFieldSelector } from '../IoK8sApiCoreV1ObjectFieldSelector';
import { IoK8sApiCoreV1ResourceFieldSelectorModelOptions as IoK8sApiCoreV1ResourceFieldSelector } from '../IoK8sApiCoreV1ResourceFieldSelector';

export interface IoK8sApiCoreV1DownwardAPIVolumeFileModelOptions {
  fieldRef?: IoK8sApiCoreV1ObjectFieldSelector;
  mode?: number;
  path: string;
  resourceFieldRef?: IoK8sApiCoreV1ResourceFieldSelector;
}
