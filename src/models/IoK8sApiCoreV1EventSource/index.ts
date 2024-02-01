import { BaseModel } from '../types';
import type { IoK8sApiCoreV1EventSourceModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1EventSourceModel extends BaseModel {
  // Component from which the event is generated.
  component?: string;
  // Node name on which the event is generated.
  host?: string;

  constructor(data: IoK8sApiCoreV1EventSourceModelOptions) {
    super();
    validate(data);
    this.component = data.component;
    this.host = data.host;
  }

  static create(data: IoK8sApiCoreV1EventSourceModelOptions): IoK8sApiCoreV1EventSourceModel {
    return new IoK8sApiCoreV1EventSourceModel(data);
  }

  toObject(): Partial<this> {
    return {
      component: this.component,
      host: this.host,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1EventSourceModel;
