import { BaseModel } from '../types';
import type { IoK8sApiAppsV1RollingUpdateStatefulSetStrategyModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiAppsV1RollingUpdateStatefulSetStrategyModel extends BaseModel {
  // IntOrString is a type that can hold an int32 or a string.  When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type.  This allows you to have, for example, a JSON field that can accept a name or number.
  maxUnavailable?: string;
  // Partition indicates the ordinal at which the StatefulSet should be partitioned for updates. During a rolling update, all pods from ordinal Replicas-1 to Partition are updated. All pods from ordinal Partition-1 to 0 remain untouched. This is helpful in being able to do a canary based deployment. The default value is 0.
  partition?: number;

  constructor(data: IoK8sApiAppsV1RollingUpdateStatefulSetStrategyModelOptions) {
    super();
    validate(data);
    this.maxUnavailable = data.maxUnavailable;
    this.partition = data.partition;
  }

  static create(
    data: IoK8sApiAppsV1RollingUpdateStatefulSetStrategyModelOptions,
  ): IoK8sApiAppsV1RollingUpdateStatefulSetStrategyModel {
    return new IoK8sApiAppsV1RollingUpdateStatefulSetStrategyModel(data);
  }

  toObject(): Partial<this> {
    return {
      maxUnavailable: this.maxUnavailable,
      partition: this.partition,
    } as Partial<this>;
  }
}

export default IoK8sApiAppsV1RollingUpdateStatefulSetStrategyModel;
