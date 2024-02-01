import { BaseModel } from '../types';
import type { IoK8sApiAuthenticationV1UserInfoModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiAuthenticationV1UserInfoModel extends BaseModel {
  // Any additional information provided by the authenticator.
  extra?: { [key: string]: Array<string> };
  // The names of groups this user is a part of.
  groups?: Array<string>;
  // A unique value that identifies this user across time. If this user is deleted and another user by the same name is added, they will have different UIDs.
  uid?: string;
  // The name that uniquely identifies this user among all active users.
  username?: string;

  constructor(data: IoK8sApiAuthenticationV1UserInfoModelOptions) {
    super();
    validate(data);
    this.extra = data.extra;
    this.groups = data.groups;
    this.uid = data.uid;
    this.username = data.username;
  }

  static create(data: IoK8sApiAuthenticationV1UserInfoModelOptions): IoK8sApiAuthenticationV1UserInfoModel {
    return new IoK8sApiAuthenticationV1UserInfoModel(data);
  }

  toObject(): Partial<this> {
    return {
      extra: this.extra,
      groups: this.groups,
      uid: this.uid,
      username: this.username,
    } as Partial<this>;
  }
}

export default IoK8sApiAuthenticationV1UserInfoModel;
