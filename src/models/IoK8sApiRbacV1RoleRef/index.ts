import { BaseModel } from '../types';
import type { IoK8sApiRbacV1RoleRefModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiRbacV1RoleRefModel extends BaseModel {
  // APIGroup is the group for the resource being referenced
  apiGroup: string;
  // Kind is the type of resource being referenced
  kind: string;
  // Name is the name of resource being referenced
  name: string;

  constructor(data: IoK8sApiRbacV1RoleRefModelOptions) {
    super();
    validate(data);
    this.apiGroup = data.apiGroup;
    this.kind = data.kind;
    this.name = data.name;
  }

  static create(data: IoK8sApiRbacV1RoleRefModelOptions): IoK8sApiRbacV1RoleRefModel {
    return new IoK8sApiRbacV1RoleRefModel(data);
  }

  toObject(): Partial<this> {
    return {
      apiGroup: this.apiGroup,
      kind: this.kind,
      name: this.name,
    } as Partial<this>;
  }
}

export default IoK8sApiRbacV1RoleRefModel;
