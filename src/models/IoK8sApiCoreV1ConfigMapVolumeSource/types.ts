import { IoK8sApiCoreV1KeyToPathModelOptions as IoK8sApiCoreV1KeyToPath } from '../IoK8sApiCoreV1KeyToPath';

export interface IoK8sApiCoreV1ConfigMapVolumeSourceModelOptions {
  defaultMode?: number;
  items?: Array<IoK8sApiCoreV1KeyToPath>;
  name?: string;
  optional?: boolean;
}
