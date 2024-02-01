import { BaseModel } from '../types';
import type { IoK8sApiCoreV1EventSeriesModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1EventSeriesModel extends BaseModel {
  // Number of occurrences in this series up to the last heartbeat time
  count?: number;
  // MicroTime is version of Time with microsecond level precision.
  lastObservedTime?: Date;

  constructor(data: IoK8sApiCoreV1EventSeriesModelOptions) {
    super();
    validate(data);
    this.count = data.count;
    this.lastObservedTime = data.lastObservedTime;
  }

  static create(data: IoK8sApiCoreV1EventSeriesModelOptions): IoK8sApiCoreV1EventSeriesModel {
    return new IoK8sApiCoreV1EventSeriesModel(data);
  }

  toObject(): Partial<this> {
    return {
      count: this.count,
      lastObservedTime: this.lastObservedTime,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1EventSeriesModel;
