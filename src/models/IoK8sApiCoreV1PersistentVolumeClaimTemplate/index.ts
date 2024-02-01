import { IoK8sApiCoreV1PersistentVolumeClaimSpecModelOptions as IoK8sApiCoreV1PersistentVolumeClaimSpec } from '../IoK8sApiCoreV1PersistentVolumeClaimSpec';
import { IoK8sApimachineryPkgApisMetaV1ObjectMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from '../IoK8sApimachineryPkgApisMetaV1ObjectMeta';
import { BaseModel } from '../types';
import type { IoK8sApiCoreV1PersistentVolumeClaimTemplateModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1PersistentVolumeClaimTemplateModel extends BaseModel {
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  spec: IoK8sApiCoreV1PersistentVolumeClaimSpec;

  constructor(data: IoK8sApiCoreV1PersistentVolumeClaimTemplateModelOptions) {
    super();
    validate(data);
    this.metadata = data.metadata;
    this.spec = data.spec;
  }

  static create(
    data: IoK8sApiCoreV1PersistentVolumeClaimTemplateModelOptions,
  ): IoK8sApiCoreV1PersistentVolumeClaimTemplateModel {
    return new IoK8sApiCoreV1PersistentVolumeClaimTemplateModel(data);
  }

  toObject(): Partial<this> {
    return {
      metadata: this.metadata,
      spec: this.spec,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1PersistentVolumeClaimTemplateModel;
