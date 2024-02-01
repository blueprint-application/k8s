import { BaseModel } from '../types';
import type { IoK8sApiFlowcontrolV1ServiceAccountSubjectModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiFlowcontrolV1ServiceAccountSubjectModel extends BaseModel {
  // `name` is the name of matching ServiceAccount objects, or \"*\" to match regardless of name. Required.
  name: string;
  // `namespace` is the namespace of matching ServiceAccount objects. Required.
  namespace: string;

  constructor(data: IoK8sApiFlowcontrolV1ServiceAccountSubjectModelOptions) {
    super();
    validate(data);
    this.name = data.name;
    this.namespace = data.namespace;
  }

  static create(
    data: IoK8sApiFlowcontrolV1ServiceAccountSubjectModelOptions,
  ): IoK8sApiFlowcontrolV1ServiceAccountSubjectModel {
    return new IoK8sApiFlowcontrolV1ServiceAccountSubjectModel(data);
  }

  toObject(): Partial<this> {
    return {
      name: this.name,
      namespace: this.namespace,
    } as Partial<this>;
  }
}

export default IoK8sApiFlowcontrolV1ServiceAccountSubjectModel;
