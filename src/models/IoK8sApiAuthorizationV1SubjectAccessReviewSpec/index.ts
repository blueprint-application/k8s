import { IoK8sApiAuthorizationV1NonResourceAttributesModelOptions as IoK8sApiAuthorizationV1NonResourceAttributes } from '../IoK8sApiAuthorizationV1NonResourceAttributes';
import { IoK8sApiAuthorizationV1ResourceAttributesModelOptions as IoK8sApiAuthorizationV1ResourceAttributes } from '../IoK8sApiAuthorizationV1ResourceAttributes';
import { BaseModel } from '../types';
import type { IoK8sApiAuthorizationV1SubjectAccessReviewSpecModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiAuthorizationV1SubjectAccessReviewSpecModel extends BaseModel {
  // Extra corresponds to the user.Info.GetExtra() method from the authenticator.  Since that is input to the authorizer it needs a reflection here.
  extra?: { [key: string]: Array<string> };
  // Groups is the groups you\'re testing for.
  groups?: Array<string>;
  nonResourceAttributes?: IoK8sApiAuthorizationV1NonResourceAttributes;
  resourceAttributes?: IoK8sApiAuthorizationV1ResourceAttributes;
  // UID information about the requesting user.
  uid?: string;
  // User is the user you\'re testing for. If you specify \"User\" but not \"Groups\", then is it interpreted as \"What if User were not a member of any groups
  user?: string;

  constructor(data: IoK8sApiAuthorizationV1SubjectAccessReviewSpecModelOptions) {
    super();
    validate(data);
    this.extra = data.extra;
    this.groups = data.groups;
    this.nonResourceAttributes = data.nonResourceAttributes;
    this.resourceAttributes = data.resourceAttributes;
    this.uid = data.uid;
    this.user = data.user;
  }

  static create(
    data: IoK8sApiAuthorizationV1SubjectAccessReviewSpecModelOptions,
  ): IoK8sApiAuthorizationV1SubjectAccessReviewSpecModel {
    return new IoK8sApiAuthorizationV1SubjectAccessReviewSpecModel(data);
  }

  toObject(): Partial<this> {
    return {
      extra: this.extra,
      groups: this.groups,
      nonResourceAttributes: this.nonResourceAttributes,
      resourceAttributes: this.resourceAttributes,
      uid: this.uid,
      user: this.user,
    } as Partial<this>;
  }
}

export default IoK8sApiAuthorizationV1SubjectAccessReviewSpecModel;
