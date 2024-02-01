import { IoK8sApiCoreV1TolerationModelOptions as IoK8sApiCoreV1Toleration } from '../IoK8sApiCoreV1Toleration';
import { BaseModel } from '../types';
import type { IoK8sApiNodeV1SchedulingModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiNodeV1SchedulingModel extends BaseModel {
  // nodeSelector lists labels that must be present on nodes that support this RuntimeClass. Pods using this RuntimeClass can only be scheduled to a node matched by this selector. The RuntimeClass nodeSelector is merged with a pod\'s existing nodeSelector. Any conflicts will cause the pod to be rejected in admission.
  nodeSelector?: { [key: string]: string };
  // tolerations are appended (excluding duplicates) to pods running with this RuntimeClass during admission, effectively unioning the set of nodes tolerated by the pod and the RuntimeClass.
  tolerations?: Array<IoK8sApiCoreV1Toleration>;

  constructor(data: IoK8sApiNodeV1SchedulingModelOptions) {
    super();
    validate(data);
    this.nodeSelector = data.nodeSelector;
    this.tolerations = data.tolerations;
  }

  static create(data: IoK8sApiNodeV1SchedulingModelOptions): IoK8sApiNodeV1SchedulingModel {
    return new IoK8sApiNodeV1SchedulingModel(data);
  }

  toObject(): Partial<this> {
    return {
      nodeSelector: this.nodeSelector,
      tolerations: this.tolerations,
    } as Partial<this>;
  }
}

export default IoK8sApiNodeV1SchedulingModel;
