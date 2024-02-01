import { BaseModel } from '../types';
import type { IoK8sApimachineryPkgApisMetaV1GroupVersionForDiscoveryModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApimachineryPkgApisMetaV1GroupVersionForDiscoveryModel extends BaseModel {
  // groupVersion specifies the API group and version in the form \"group/version\"
  groupVersion: string;
  // version specifies the version in the form of \"version\". This is to save the clients the trouble of splitting the GroupVersion.
  version: string;

  constructor(data: IoK8sApimachineryPkgApisMetaV1GroupVersionForDiscoveryModelOptions) {
    super();
    validate(data);
    this.groupVersion = data.groupVersion;
    this.version = data.version;
  }

  static create(
    data: IoK8sApimachineryPkgApisMetaV1GroupVersionForDiscoveryModelOptions,
  ): IoK8sApimachineryPkgApisMetaV1GroupVersionForDiscoveryModel {
    return new IoK8sApimachineryPkgApisMetaV1GroupVersionForDiscoveryModel(data);
  }

  toObject(): Partial<this> {
    return {
      groupVersion: this.groupVersion,
      version: this.version,
    } as Partial<this>;
  }
}

export default IoK8sApimachineryPkgApisMetaV1GroupVersionForDiscoveryModel;
