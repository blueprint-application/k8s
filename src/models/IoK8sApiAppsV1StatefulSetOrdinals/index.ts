import { BaseModel } from '../types';
import type { IoK8sApiAppsV1StatefulSetOrdinalsModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiAppsV1StatefulSetOrdinalsModel extends BaseModel {
  // start is the number representing the first replica\'s index. It may be used to number replicas from an alternate index (eg: 1-indexed) over the default 0-indexed names, or to orchestrate progressive movement of replicas from one StatefulSet to another. If set, replica indices will be in the range:   [.spec.ordinals.start, .spec.ordinals.start + .spec.replicas). If unset, defaults to 0. Replica indices will be in the range:   [0, .spec.replicas).
  start?: number;

  constructor(data: IoK8sApiAppsV1StatefulSetOrdinalsModelOptions) {
    super();
    validate(data);
    this.start = data.start;
  }

  static create(data: IoK8sApiAppsV1StatefulSetOrdinalsModelOptions): IoK8sApiAppsV1StatefulSetOrdinalsModel {
    return new IoK8sApiAppsV1StatefulSetOrdinalsModel(data);
  }

  toObject(): Partial<this> {
    return {
      start: this.start,
    } as Partial<this>;
  }
}

export default IoK8sApiAppsV1StatefulSetOrdinalsModel;
