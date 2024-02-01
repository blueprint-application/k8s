import { IoK8sApiCoreV1NamespaceConditionModelOptions as IoK8sApiCoreV1NamespaceCondition } from '../IoK8sApiCoreV1NamespaceCondition';
import { BaseModel } from '../types';
import type { IoK8sApiCoreV1NamespaceStatusModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1NamespaceStatusModel extends BaseModel {
  // Represents the latest available observations of a namespace\'s current state.
  conditions?: Array<IoK8sApiCoreV1NamespaceCondition>;
  // Phase is the current lifecycle phase of the namespace. More info: https://kubernetes.io/docs/tasks/administer-cluster/namespaces/
  phase?: string;

  constructor(data: IoK8sApiCoreV1NamespaceStatusModelOptions) {
    super();
    validate(data);
    this.conditions = data.conditions;
    this.phase = data.phase;
  }

  static create(data: IoK8sApiCoreV1NamespaceStatusModelOptions): IoK8sApiCoreV1NamespaceStatusModel {
    return new IoK8sApiCoreV1NamespaceStatusModel(data);
  }

  toObject(): Partial<this> {
    return {
      conditions: this.conditions,
      phase: this.phase,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1NamespaceStatusModel;
