import { BaseModel } from '../types';
import type { IoK8sApiCoreV1TypedLocalObjectReferenceModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1TypedLocalObjectReferenceModel extends BaseModel {
  // APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
  apiGroup?: string;
  // Kind is the type of resource being referenced
  kind: string;
  // Name is the name of resource being referenced
  name: string;

  constructor(data: IoK8sApiCoreV1TypedLocalObjectReferenceModelOptions) {
    super();
    validate(data);
    this.apiGroup = data.apiGroup;
    this.kind = data.kind;
    this.name = data.name;
  }

  static create(
    data: IoK8sApiCoreV1TypedLocalObjectReferenceModelOptions,
  ): IoK8sApiCoreV1TypedLocalObjectReferenceModel {
    return new IoK8sApiCoreV1TypedLocalObjectReferenceModel(data);
  }

  toObject(): Partial<this> {
    return {
      apiGroup: this.apiGroup,
      kind: this.kind,
      name: this.name,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1TypedLocalObjectReferenceModel;
