import { BaseModel } from '../types';
import type { IoK8sApiFlowcontrolV1GroupSubjectModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiFlowcontrolV1GroupSubjectModel extends BaseModel {
  // name is the user group that matches, or \"*\" to match all user groups. See https://github.com/kubernetes/apiserver/blob/master/pkg/authentication/user/user.go for some well-known group names. Required.
  name: string;

  constructor(data: IoK8sApiFlowcontrolV1GroupSubjectModelOptions) {
    super();
    validate(data);
    this.name = data.name;
  }

  static create(data: IoK8sApiFlowcontrolV1GroupSubjectModelOptions): IoK8sApiFlowcontrolV1GroupSubjectModel {
    return new IoK8sApiFlowcontrolV1GroupSubjectModel(data);
  }

  toObject(): Partial<this> {
    return {
      name: this.name,
    } as Partial<this>;
  }
}

export default IoK8sApiFlowcontrolV1GroupSubjectModel;
