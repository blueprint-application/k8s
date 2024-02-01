import { IoK8sApiAppsV1RollingUpdateDaemonSetModelOptions as IoK8sApiAppsV1RollingUpdateDaemonSet } from '../IoK8sApiAppsV1RollingUpdateDaemonSet';
import { BaseModel } from '../types';
import type { IoK8sApiAppsV1DaemonSetUpdateStrategyModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiAppsV1DaemonSetUpdateStrategyModel extends BaseModel {
  rollingUpdate?: IoK8sApiAppsV1RollingUpdateDaemonSet;
  // Type of daemon set update. Can be \"RollingUpdate\" or \"OnDelete\". Default is RollingUpdate.
  type?: string;

  constructor(data: IoK8sApiAppsV1DaemonSetUpdateStrategyModelOptions) {
    super();
    validate(data);
    this.rollingUpdate = data.rollingUpdate;
    this.type = data.type;
  }

  static create(data: IoK8sApiAppsV1DaemonSetUpdateStrategyModelOptions): IoK8sApiAppsV1DaemonSetUpdateStrategyModel {
    return new IoK8sApiAppsV1DaemonSetUpdateStrategyModel(data);
  }

  toObject(): Partial<this> {
    return {
      rollingUpdate: this.rollingUpdate,
      type: this.type,
    } as Partial<this>;
  }
}

export default IoK8sApiAppsV1DaemonSetUpdateStrategyModel;
