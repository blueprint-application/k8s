import { IoK8sApiFlowcontrolV1GroupSubjectModelOptions as IoK8sApiFlowcontrolV1GroupSubject } from '../IoK8sApiFlowcontrolV1GroupSubject';
import { IoK8sApiFlowcontrolV1ServiceAccountSubjectModelOptions as IoK8sApiFlowcontrolV1ServiceAccountSubject } from '../IoK8sApiFlowcontrolV1ServiceAccountSubject';
import { IoK8sApiFlowcontrolV1UserSubjectModelOptions as IoK8sApiFlowcontrolV1UserSubject } from '../IoK8sApiFlowcontrolV1UserSubject';
import { BaseModel } from '../types';
import type { IoK8sApiFlowcontrolV1SubjectModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiFlowcontrolV1SubjectModel extends BaseModel {
  group?: IoK8sApiFlowcontrolV1GroupSubject;
  // `kind` indicates which one of the other fields is non-empty. Required
  kind: string;
  serviceAccount?: IoK8sApiFlowcontrolV1ServiceAccountSubject;
  user?: IoK8sApiFlowcontrolV1UserSubject;

  constructor(data: IoK8sApiFlowcontrolV1SubjectModelOptions) {
    super();
    validate(data);
    this.group = data.group;
    this.kind = data.kind;
    this.serviceAccount = data.serviceAccount;
    this.user = data.user;
  }

  static create(data: IoK8sApiFlowcontrolV1SubjectModelOptions): IoK8sApiFlowcontrolV1SubjectModel {
    return new IoK8sApiFlowcontrolV1SubjectModel(data);
  }

  toObject(): Partial<this> {
    return {
      group: this.group,
      kind: this.kind,
      serviceAccount: this.serviceAccount,
      user: this.user,
    } as Partial<this>;
  }
}

export default IoK8sApiFlowcontrolV1SubjectModel;
