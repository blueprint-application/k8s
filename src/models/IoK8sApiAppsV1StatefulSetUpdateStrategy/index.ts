import { IoK8sApiAppsV1RollingUpdateStatefulSetStrategyModelOptions as IoK8sApiAppsV1RollingUpdateStatefulSetStrategy } from '../IoK8sApiAppsV1RollingUpdateStatefulSetStrategy';
import { BaseModel } from '../types';
import type { IoK8sApiAppsV1StatefulSetUpdateStrategyModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiAppsV1StatefulSetUpdateStrategyModel extends BaseModel {
  rollingUpdate?: IoK8sApiAppsV1RollingUpdateStatefulSetStrategy;
  // Type indicates the type of the StatefulSetUpdateStrategy. Default is RollingUpdate.
  type?: string;

  constructor(data: IoK8sApiAppsV1StatefulSetUpdateStrategyModelOptions) {
    super();
    validate(data);
    this.rollingUpdate = data.rollingUpdate;
    this.type = data.type;
  }

  static create(
    data: IoK8sApiAppsV1StatefulSetUpdateStrategyModelOptions,
  ): IoK8sApiAppsV1StatefulSetUpdateStrategyModel {
    return new IoK8sApiAppsV1StatefulSetUpdateStrategyModel(data);
  }

  toObject(): Partial<this> {
    return {
      rollingUpdate: this.rollingUpdate,
      type: this.type,
    } as Partial<this>;
  }
}

export default IoK8sApiAppsV1StatefulSetUpdateStrategyModel;
