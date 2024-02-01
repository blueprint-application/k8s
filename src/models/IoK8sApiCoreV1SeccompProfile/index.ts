import { BaseModel } from '../types';
import type { IoK8sApiCoreV1SeccompProfileModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1SeccompProfileModel extends BaseModel {
  // localhostProfile indicates a profile defined in a file on the node should be used. The profile must be preconfigured on the node to work. Must be a descending path, relative to the kubelet\'s configured seccomp profile location. Must be set if type is \"Localhost\". Must NOT be set for any other type.
  localhostProfile?: string;
  // type indicates which kind of seccomp profile will be applied. Valid options are:  Localhost - a profile defined in a file on the node should be used. RuntimeDefault - the container runtime default profile should be used. Unconfined - no profile should be applied.
  type: string;

  constructor(data: IoK8sApiCoreV1SeccompProfileModelOptions) {
    super();
    validate(data);
    this.localhostProfile = data.localhostProfile;
    this.type = data.type;
  }

  static create(data: IoK8sApiCoreV1SeccompProfileModelOptions): IoK8sApiCoreV1SeccompProfileModel {
    return new IoK8sApiCoreV1SeccompProfileModel(data);
  }

  toObject(): Partial<this> {
    return {
      localhostProfile: this.localhostProfile,
      type: this.type,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1SeccompProfileModel;
