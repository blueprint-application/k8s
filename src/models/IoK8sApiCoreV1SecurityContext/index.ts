import { IoK8sApiCoreV1CapabilitiesModelOptions as IoK8sApiCoreV1Capabilities } from '../IoK8sApiCoreV1Capabilities';
import { IoK8sApiCoreV1SELinuxOptionsModelOptions as IoK8sApiCoreV1SELinuxOptions } from '../IoK8sApiCoreV1SELinuxOptions';
import { IoK8sApiCoreV1SeccompProfileModelOptions as IoK8sApiCoreV1SeccompProfile } from '../IoK8sApiCoreV1SeccompProfile';
import { IoK8sApiCoreV1WindowsSecurityContextOptionsModelOptions as IoK8sApiCoreV1WindowsSecurityContextOptions } from '../IoK8sApiCoreV1WindowsSecurityContextOptions';
import { BaseModel } from '../types';
import type { IoK8sApiCoreV1SecurityContextModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1SecurityContextModel extends BaseModel {
  // AllowPrivilegeEscalation controls whether a process can gain more privileges than its parent process. This bool directly controls if the no_new_privs flag will be set on the container process. AllowPrivilegeEscalation is true always when the container is: 1) run as Privileged 2) has CAP_SYS_ADMIN Note that this field cannot be set when spec.os.name is windows.
  allowPrivilegeEscalation?: boolean;
  capabilities?: IoK8sApiCoreV1Capabilities;
  // Run container in privileged mode. Processes in privileged containers are essentially equivalent to root on the host. Defaults to false. Note that this field cannot be set when spec.os.name is windows.
  privileged?: boolean;
  // procMount denotes the type of proc mount to use for the containers. The default is DefaultProcMount which uses the container runtime defaults for readonly paths and masked paths. This requires the ProcMountType feature flag to be enabled. Note that this field cannot be set when spec.os.name is windows.
  procMount?: string;
  // Whether this container has a read-only root filesystem. Default is false. Note that this field cannot be set when spec.os.name is windows.
  readOnlyRootFilesystem?: boolean;
  // The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is windows.
  runAsGroup?: number;
  // Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
  runAsNonRoot?: boolean;
  // The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is windows.
  runAsUser?: number;
  seLinuxOptions?: IoK8sApiCoreV1SELinuxOptions;
  seccompProfile?: IoK8sApiCoreV1SeccompProfile;
  windowsOptions?: IoK8sApiCoreV1WindowsSecurityContextOptions;

  constructor(data: IoK8sApiCoreV1SecurityContextModelOptions) {
    super();
    validate(data);
    this.allowPrivilegeEscalation = data.allowPrivilegeEscalation;
    this.capabilities = data.capabilities;
    this.privileged = data.privileged;
    this.procMount = data.procMount;
    this.readOnlyRootFilesystem = data.readOnlyRootFilesystem;
    this.runAsGroup = data.runAsGroup;
    this.runAsNonRoot = data.runAsNonRoot;
    this.runAsUser = data.runAsUser;
    this.seLinuxOptions = data.seLinuxOptions;
    this.seccompProfile = data.seccompProfile;
    this.windowsOptions = data.windowsOptions;
  }

  static create(data: IoK8sApiCoreV1SecurityContextModelOptions): IoK8sApiCoreV1SecurityContextModel {
    return new IoK8sApiCoreV1SecurityContextModel(data);
  }

  toObject(): Partial<this> {
    return {
      allowPrivilegeEscalation: this.allowPrivilegeEscalation,
      capabilities: this.capabilities,
      privileged: this.privileged,
      procMount: this.procMount,
      readOnlyRootFilesystem: this.readOnlyRootFilesystem,
      runAsGroup: this.runAsGroup,
      runAsNonRoot: this.runAsNonRoot,
      runAsUser: this.runAsUser,
      seLinuxOptions: this.seLinuxOptions,
      seccompProfile: this.seccompProfile,
      windowsOptions: this.windowsOptions,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1SecurityContextModel;
