import { BaseModel } from '../types';
import type { IoK8sApiAppsV1RollingUpdateDaemonSetModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiAppsV1RollingUpdateDaemonSetModel extends BaseModel {
  // IntOrString is a type that can hold an int32 or a string.  When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type.  This allows you to have, for example, a JSON field that can accept a name or number.
  maxSurge?: string;
  // IntOrString is a type that can hold an int32 or a string.  When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type.  This allows you to have, for example, a JSON field that can accept a name or number.
  maxUnavailable?: string;

  constructor(data: IoK8sApiAppsV1RollingUpdateDaemonSetModelOptions) {
    super();
    validate(data);
    this.maxSurge = data.maxSurge;
    this.maxUnavailable = data.maxUnavailable;
  }

  static create(data: IoK8sApiAppsV1RollingUpdateDaemonSetModelOptions): IoK8sApiAppsV1RollingUpdateDaemonSetModel {
    return new IoK8sApiAppsV1RollingUpdateDaemonSetModel(data);
  }

  toObject(): Partial<this> {
    return {
      maxSurge: this.maxSurge,
      maxUnavailable: this.maxUnavailable,
    } as Partial<this>;
  }
}

export default IoK8sApiAppsV1RollingUpdateDaemonSetModel;
