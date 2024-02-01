import { IoK8sApiAuthenticationV1UserInfoModelOptions as IoK8sApiAuthenticationV1UserInfo } from '../IoK8sApiAuthenticationV1UserInfo';
import { BaseModel } from '../types';
import type { IoK8sApiAuthenticationV1alpha1SelfSubjectReviewStatusModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiAuthenticationV1alpha1SelfSubjectReviewStatusModel extends BaseModel {
  userInfo?: IoK8sApiAuthenticationV1UserInfo;

  constructor(data: IoK8sApiAuthenticationV1alpha1SelfSubjectReviewStatusModelOptions) {
    super();
    validate(data);
    this.userInfo = data.userInfo;
  }

  static create(
    data: IoK8sApiAuthenticationV1alpha1SelfSubjectReviewStatusModelOptions,
  ): IoK8sApiAuthenticationV1alpha1SelfSubjectReviewStatusModel {
    return new IoK8sApiAuthenticationV1alpha1SelfSubjectReviewStatusModel(data);
  }

  toObject(): Partial<this> {
    return {
      userInfo: this.userInfo,
    } as Partial<this>;
  }
}

export default IoK8sApiAuthenticationV1alpha1SelfSubjectReviewStatusModel;
