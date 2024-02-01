import { IoK8sApiCoreV1PodSpecModelOptions as IoK8sApiCoreV1PodSpec } from '../IoK8sApiCoreV1PodSpec';
import { IoK8sApimachineryPkgApisMetaV1ObjectMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from '../IoK8sApimachineryPkgApisMetaV1ObjectMeta';
import { BaseModel } from '../types';
import type { IoK8sApiCoreV1PodTemplateSpecModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1PodTemplateSpecModel extends BaseModel {
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  spec?: IoK8sApiCoreV1PodSpec;

  constructor(data: IoK8sApiCoreV1PodTemplateSpecModelOptions) {
    super();
    validate(data);
    this.metadata = data.metadata;
    this.spec = data.spec;
  }

  static create(data: IoK8sApiCoreV1PodTemplateSpecModelOptions): IoK8sApiCoreV1PodTemplateSpecModel {
    return new IoK8sApiCoreV1PodTemplateSpecModel(data);
  }

  toObject(): Partial<this> {
    return {
      metadata: this.metadata,
      spec: this.spec,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1PodTemplateSpecModel;
