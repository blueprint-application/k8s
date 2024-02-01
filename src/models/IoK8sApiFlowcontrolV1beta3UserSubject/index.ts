import { BaseModel } from '../types';
import type { IoK8sApiFlowcontrolV1beta3UserSubjectModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiFlowcontrolV1beta3UserSubjectModel extends BaseModel {
  // `name` is the username that matches, or \"*\" to match all usernames. Required.
  name: string;

  constructor(data: IoK8sApiFlowcontrolV1beta3UserSubjectModelOptions) {
    super();
    validate(data);
    this.name = data.name;
  }

  static create(data: IoK8sApiFlowcontrolV1beta3UserSubjectModelOptions): IoK8sApiFlowcontrolV1beta3UserSubjectModel {
    return new IoK8sApiFlowcontrolV1beta3UserSubjectModel(data);
  }

  toObject(): Partial<this> {
    return {
      name: this.name,
    } as Partial<this>;
  }
}

export default IoK8sApiFlowcontrolV1beta3UserSubjectModel;
