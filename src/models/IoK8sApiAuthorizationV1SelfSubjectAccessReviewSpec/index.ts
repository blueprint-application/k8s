import { IoK8sApiAuthorizationV1NonResourceAttributesModelOptions as IoK8sApiAuthorizationV1NonResourceAttributes } from '../IoK8sApiAuthorizationV1NonResourceAttributes';
import { IoK8sApiAuthorizationV1ResourceAttributesModelOptions as IoK8sApiAuthorizationV1ResourceAttributes } from '../IoK8sApiAuthorizationV1ResourceAttributes';
import { BaseModel } from '../types';
import type { IoK8sApiAuthorizationV1SelfSubjectAccessReviewSpecModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiAuthorizationV1SelfSubjectAccessReviewSpecModel extends BaseModel {
  nonResourceAttributes?: IoK8sApiAuthorizationV1NonResourceAttributes;
  resourceAttributes?: IoK8sApiAuthorizationV1ResourceAttributes;

  constructor(data: IoK8sApiAuthorizationV1SelfSubjectAccessReviewSpecModelOptions) {
    super();
    validate(data);
    this.nonResourceAttributes = data.nonResourceAttributes;
    this.resourceAttributes = data.resourceAttributes;
  }

  static create(
    data: IoK8sApiAuthorizationV1SelfSubjectAccessReviewSpecModelOptions,
  ): IoK8sApiAuthorizationV1SelfSubjectAccessReviewSpecModel {
    return new IoK8sApiAuthorizationV1SelfSubjectAccessReviewSpecModel(data);
  }

  toObject(): Partial<this> {
    return {
      nonResourceAttributes: this.nonResourceAttributes,
      resourceAttributes: this.resourceAttributes,
    } as Partial<this>;
  }
}

export default IoK8sApiAuthorizationV1SelfSubjectAccessReviewSpecModel;
