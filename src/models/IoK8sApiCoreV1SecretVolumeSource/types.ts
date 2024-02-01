import { IoK8sApiCoreV1KeyToPathModelOptions as IoK8sApiCoreV1KeyToPath } from '../IoK8sApiCoreV1KeyToPath';

export interface IoK8sApiCoreV1SecretVolumeSourceModelOptions {
  defaultMode?: number;
  items?: Array<IoK8sApiCoreV1KeyToPath>;
  optional?: boolean;
  secretName?: string;
}
