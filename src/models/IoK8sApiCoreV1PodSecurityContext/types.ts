import { IoK8sApiCoreV1SELinuxOptionsModelOptions as IoK8sApiCoreV1SELinuxOptions } from '../IoK8sApiCoreV1SELinuxOptions';
import { IoK8sApiCoreV1SeccompProfileModelOptions as IoK8sApiCoreV1SeccompProfile } from '../IoK8sApiCoreV1SeccompProfile';
import { IoK8sApiCoreV1SysctlModelOptions as IoK8sApiCoreV1Sysctl } from '../IoK8sApiCoreV1Sysctl';
import { IoK8sApiCoreV1WindowsSecurityContextOptionsModelOptions as IoK8sApiCoreV1WindowsSecurityContextOptions } from '../IoK8sApiCoreV1WindowsSecurityContextOptions';

export interface IoK8sApiCoreV1PodSecurityContextModelOptions {
  fsGroup?: number;
  fsGroupChangePolicy?: string;
  runAsGroup?: number;
  runAsNonRoot?: boolean;
  runAsUser?: number;
  seLinuxOptions?: IoK8sApiCoreV1SELinuxOptions;
  seccompProfile?: IoK8sApiCoreV1SeccompProfile;
  supplementalGroups?: Array<number>;
  sysctls?: Array<IoK8sApiCoreV1Sysctl>;
  windowsOptions?: IoK8sApiCoreV1WindowsSecurityContextOptions;
}
