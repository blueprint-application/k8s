import { IoK8sApimachineryPkgApisMetaV1StatusCauseModelOptions as IoK8sApimachineryPkgApisMetaV1StatusCause } from '../IoK8sApimachineryPkgApisMetaV1StatusCause';
import { BaseModel } from '../types';
import type { IoK8sApimachineryPkgApisMetaV1StatusDetailsModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApimachineryPkgApisMetaV1StatusDetailsModel extends BaseModel {
  // The Causes array includes more details associated with the StatusReason failure. Not all StatusReasons may provide detailed causes.
  causes?: Array<IoK8sApimachineryPkgApisMetaV1StatusCause>;
  // The group attribute of the resource associated with the status StatusReason.
  group?: string;
  // The kind attribute of the resource associated with the status StatusReason. On some operations may differ from the requested resource Kind. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  kind?: string;
  // The name attribute of the resource associated with the status StatusReason (when there is a single name which can be described).
  name?: string;
  // If specified, the time in seconds before the operation should be retried. Some errors may indicate the client must take an alternate action - for those errors this field may indicate how long to wait before taking the alternate action.
  retryAfterSeconds?: number;
  // UID of the resource. (when there is a single resource which can be described). More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#uids
  uid?: string;

  constructor(data: IoK8sApimachineryPkgApisMetaV1StatusDetailsModelOptions) {
    super();
    validate(data);
    this.causes = data.causes;
    this.group = data.group;
    this.kind = data.kind;
    this.name = data.name;
    this.retryAfterSeconds = data.retryAfterSeconds;
    this.uid = data.uid;
  }

  static create(
    data: IoK8sApimachineryPkgApisMetaV1StatusDetailsModelOptions,
  ): IoK8sApimachineryPkgApisMetaV1StatusDetailsModel {
    return new IoK8sApimachineryPkgApisMetaV1StatusDetailsModel(data);
  }

  toObject(): Partial<this> {
    return {
      causes: this.causes,
      group: this.group,
      kind: this.kind,
      name: this.name,
      retryAfterSeconds: this.retryAfterSeconds,
      uid: this.uid,
    } as Partial<this>;
  }
}

export default IoK8sApimachineryPkgApisMetaV1StatusDetailsModel;
