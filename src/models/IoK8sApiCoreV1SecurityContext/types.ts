import { IoK8sApiCoreV1CapabilitiesModelOptions as IoK8sApiCoreV1Capabilities } from '../IoK8sApiCoreV1Capabilities';
import { IoK8sApiCoreV1SELinuxOptionsModelOptions as IoK8sApiCoreV1SELinuxOptions } from '../IoK8sApiCoreV1SELinuxOptions';
import { IoK8sApiCoreV1SeccompProfileModelOptions as IoK8sApiCoreV1SeccompProfile } from '../IoK8sApiCoreV1SeccompProfile';
import { IoK8sApiCoreV1WindowsSecurityContextOptionsModelOptions as IoK8sApiCoreV1WindowsSecurityContextOptions } from '../IoK8sApiCoreV1WindowsSecurityContextOptions';

export interface IoK8sApiCoreV1SecurityContextModelOptions {
  allowPrivilegeEscalation?: boolean;
  capabilities?: IoK8sApiCoreV1Capabilities;
  privileged?: boolean;
  procMount?: string;
  readOnlyRootFilesystem?: boolean;
  runAsGroup?: number;
  runAsNonRoot?: boolean;
  runAsUser?: number;
  seLinuxOptions?: IoK8sApiCoreV1SELinuxOptions;
  seccompProfile?: IoK8sApiCoreV1SeccompProfile;
  windowsOptions?: IoK8sApiCoreV1WindowsSecurityContextOptions;
}
