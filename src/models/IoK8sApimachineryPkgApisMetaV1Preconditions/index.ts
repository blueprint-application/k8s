import { BaseModel } from '../types';
import type { IoK8sApimachineryPkgApisMetaV1PreconditionsModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApimachineryPkgApisMetaV1PreconditionsModel extends BaseModel {
  // Specifies the target ResourceVersion
  resourceVersion?: string;
  // Specifies the target UID.
  uid?: string;

  constructor(data: IoK8sApimachineryPkgApisMetaV1PreconditionsModelOptions) {
    super();
    validate(data);
    this.resourceVersion = data.resourceVersion;
    this.uid = data.uid;
  }

  static create(
    data: IoK8sApimachineryPkgApisMetaV1PreconditionsModelOptions,
  ): IoK8sApimachineryPkgApisMetaV1PreconditionsModel {
    return new IoK8sApimachineryPkgApisMetaV1PreconditionsModel(data);
  }

  toObject(): Partial<this> {
    return {
      resourceVersion: this.resourceVersion,
      uid: this.uid,
    } as Partial<this>;
  }
}

export default IoK8sApimachineryPkgApisMetaV1PreconditionsModel;
