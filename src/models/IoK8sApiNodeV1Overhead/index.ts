import { BaseModel } from '../types';
import type { IoK8sApiNodeV1OverheadModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiNodeV1OverheadModel extends BaseModel {
  // podFixed represents the fixed resource overhead associated with running a pod.
  podFixed?: { [key: string]: string };

  constructor(data: IoK8sApiNodeV1OverheadModelOptions) {
    super();
    validate(data);
    this.podFixed = data.podFixed;
  }

  static create(data: IoK8sApiNodeV1OverheadModelOptions): IoK8sApiNodeV1OverheadModel {
    return new IoK8sApiNodeV1OverheadModel(data);
  }

  toObject(): Partial<this> {
    return {
      podFixed: this.podFixed,
    } as Partial<this>;
  }
}

export default IoK8sApiNodeV1OverheadModel;
