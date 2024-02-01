import { BaseModel } from '../types';
import type { IoK8sApiCoreV1SELinuxOptionsModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1SELinuxOptionsModel extends BaseModel {
  // Level is SELinux level label that applies to the container.
  level?: string;
  // Role is a SELinux role label that applies to the container.
  role?: string;
  // Type is a SELinux type label that applies to the container.
  type?: string;
  // User is a SELinux user label that applies to the container.
  user?: string;

  constructor(data: IoK8sApiCoreV1SELinuxOptionsModelOptions) {
    super();
    validate(data);
    this.level = data.level;
    this.role = data.role;
    this.type = data.type;
    this.user = data.user;
  }

  static create(data: IoK8sApiCoreV1SELinuxOptionsModelOptions): IoK8sApiCoreV1SELinuxOptionsModel {
    return new IoK8sApiCoreV1SELinuxOptionsModel(data);
  }

  toObject(): Partial<this> {
    return {
      level: this.level,
      role: this.role,
      type: this.type,
      user: this.user,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1SELinuxOptionsModel;
