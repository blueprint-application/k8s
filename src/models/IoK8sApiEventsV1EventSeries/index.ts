import { BaseModel } from '../types';
import type { IoK8sApiEventsV1EventSeriesModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiEventsV1EventSeriesModel extends BaseModel {
  // count is the number of occurrences in this series up to the last heartbeat time.
  count: number;
  // MicroTime is version of Time with microsecond level precision.
  lastObservedTime: Date;

  constructor(data: IoK8sApiEventsV1EventSeriesModelOptions) {
    super();
    validate(data);
    this.count = data.count;
    this.lastObservedTime = data.lastObservedTime;
  }

  static create(data: IoK8sApiEventsV1EventSeriesModelOptions): IoK8sApiEventsV1EventSeriesModel {
    return new IoK8sApiEventsV1EventSeriesModel(data);
  }

  toObject(): Partial<this> {
    return {
      count: this.count,
      lastObservedTime: this.lastObservedTime,
    } as Partial<this>;
  }
}

export default IoK8sApiEventsV1EventSeriesModel;
