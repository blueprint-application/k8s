import { IoK8sApiCoreV1SELinuxOptionsModelOptions as IoK8sApiCoreV1SELinuxOptions } from '../IoK8sApiCoreV1SELinuxOptions';
import { IoK8sApiCoreV1SeccompProfileModelOptions as IoK8sApiCoreV1SeccompProfile } from '../IoK8sApiCoreV1SeccompProfile';
import { IoK8sApiCoreV1SysctlModelOptions as IoK8sApiCoreV1Sysctl } from '../IoK8sApiCoreV1Sysctl';
import { IoK8sApiCoreV1WindowsSecurityContextOptionsModelOptions as IoK8sApiCoreV1WindowsSecurityContextOptions } from '../IoK8sApiCoreV1WindowsSecurityContextOptions';
import { BaseModel } from '../types';
import type { IoK8sApiCoreV1PodSecurityContextModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1PodSecurityContextModel extends BaseModel {
  // A special supplemental group that applies to all containers in a pod. Some volume types allow the Kubelet to change the ownership of that volume to be owned by the pod:  1. The owning GID will be the FSGroup 2. The setgid bit is set (new files created in the volume will be owned by FSGroup) 3. The permission bits are OR\'d with rw-rw----  If unset, the Kubelet will not modify the ownership and permissions of any volume. Note that this field cannot be set when spec.os.name is windows.
  fsGroup?: number;
  // fsGroupChangePolicy defines behavior of changing ownership and permission of the volume before being exposed inside Pod. This field will only apply to volume types which support fsGroup based ownership(and permissions). It will have no effect on ephemeral volume types such as: secret, configmaps and emptydir. Valid values are \"OnRootMismatch\" and \"Always\". If not specified, \"Always\" is used. Note that this field cannot be set when spec.os.name is windows.
  fsGroupChangePolicy?: string;
  // The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container. Note that this field cannot be set when spec.os.name is windows.
  runAsGroup?: number;
  // Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
  runAsNonRoot?: boolean;
  // The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container. Note that this field cannot be set when spec.os.name is windows.
  runAsUser?: number;
  seLinuxOptions?: IoK8sApiCoreV1SELinuxOptions;
  seccompProfile?: IoK8sApiCoreV1SeccompProfile;
  // A list of groups applied to the first process run in each container, in addition to the container\'s primary GID, the fsGroup (if specified), and group memberships defined in the container image for the uid of the container process. If unspecified, no additional groups are added to any container. Note that group memberships defined in the container image for the uid of the container process are still effective, even if they are not included in this list. Note that this field cannot be set when spec.os.name is windows.
  supplementalGroups?: Array<number>;
  // Sysctls hold a list of namespaced sysctls used for the pod. Pods with unsupported sysctls (by the container runtime) might fail to launch. Note that this field cannot be set when spec.os.name is windows.
  sysctls?: Array<IoK8sApiCoreV1Sysctl>;
  windowsOptions?: IoK8sApiCoreV1WindowsSecurityContextOptions;

  constructor(data: IoK8sApiCoreV1PodSecurityContextModelOptions) {
    super();
    validate(data);
    this.fsGroup = data.fsGroup;
    this.fsGroupChangePolicy = data.fsGroupChangePolicy;
    this.runAsGroup = data.runAsGroup;
    this.runAsNonRoot = data.runAsNonRoot;
    this.runAsUser = data.runAsUser;
    this.seLinuxOptions = data.seLinuxOptions;
    this.seccompProfile = data.seccompProfile;
    this.supplementalGroups = data.supplementalGroups;
    this.sysctls = data.sysctls;
    this.windowsOptions = data.windowsOptions;
  }

  static create(data: IoK8sApiCoreV1PodSecurityContextModelOptions): IoK8sApiCoreV1PodSecurityContextModel {
    return new IoK8sApiCoreV1PodSecurityContextModel(data);
  }

  toObject(): Partial<this> {
    return {
      fsGroup: this.fsGroup,
      fsGroupChangePolicy: this.fsGroupChangePolicy,
      runAsGroup: this.runAsGroup,
      runAsNonRoot: this.runAsNonRoot,
      runAsUser: this.runAsUser,
      seLinuxOptions: this.seLinuxOptions,
      seccompProfile: this.seccompProfile,
      supplementalGroups: this.supplementalGroups,
      sysctls: this.sysctls,
      windowsOptions: this.windowsOptions,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1PodSecurityContextModel;
