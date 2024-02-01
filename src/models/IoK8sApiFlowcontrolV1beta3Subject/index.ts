import { IoK8sApiFlowcontrolV1beta3GroupSubjectModelOptions as IoK8sApiFlowcontrolV1beta3GroupSubject } from '../IoK8sApiFlowcontrolV1beta3GroupSubject';
import { IoK8sApiFlowcontrolV1beta3ServiceAccountSubjectModelOptions as IoK8sApiFlowcontrolV1beta3ServiceAccountSubject } from '../IoK8sApiFlowcontrolV1beta3ServiceAccountSubject';
import { IoK8sApiFlowcontrolV1beta3UserSubjectModelOptions as IoK8sApiFlowcontrolV1beta3UserSubject } from '../IoK8sApiFlowcontrolV1beta3UserSubject';
import { BaseModel } from '../types';
import type { IoK8sApiFlowcontrolV1beta3SubjectModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiFlowcontrolV1beta3SubjectModel extends BaseModel {
  group?: IoK8sApiFlowcontrolV1beta3GroupSubject;
  // `kind` indicates which one of the other fields is non-empty. Required
  kind: string;
  serviceAccount?: IoK8sApiFlowcontrolV1beta3ServiceAccountSubject;
  user?: IoK8sApiFlowcontrolV1beta3UserSubject;

  constructor(data: IoK8sApiFlowcontrolV1beta3SubjectModelOptions) {
    super();
    validate(data);
    this.group = data.group;
    this.kind = data.kind;
    this.serviceAccount = data.serviceAccount;
    this.user = data.user;
  }

  static create(data: IoK8sApiFlowcontrolV1beta3SubjectModelOptions): IoK8sApiFlowcontrolV1beta3SubjectModel {
    return new IoK8sApiFlowcontrolV1beta3SubjectModel(data);
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

export default IoK8sApiFlowcontrolV1beta3SubjectModel;
