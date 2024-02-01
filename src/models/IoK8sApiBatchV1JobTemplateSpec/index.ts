import { IoK8sApiBatchV1JobSpecModelOptions as IoK8sApiBatchV1JobSpec } from '../IoK8sApiBatchV1JobSpec';
import { IoK8sApimachineryPkgApisMetaV1ObjectMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from '../IoK8sApimachineryPkgApisMetaV1ObjectMeta';
import { BaseModel } from '../types';
import type { IoK8sApiBatchV1JobTemplateSpecModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiBatchV1JobTemplateSpecModel extends BaseModel {
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  spec?: IoK8sApiBatchV1JobSpec;

  constructor(data: IoK8sApiBatchV1JobTemplateSpecModelOptions) {
    super();
    validate(data);
    this.metadata = data.metadata;
    this.spec = data.spec;
  }

  static create(data: IoK8sApiBatchV1JobTemplateSpecModelOptions): IoK8sApiBatchV1JobTemplateSpecModel {
    return new IoK8sApiBatchV1JobTemplateSpecModel(data);
  }

  toObject(): Partial<this> {
    return {
      metadata: this.metadata,
      spec: this.spec,
    } as Partial<this>;
  }
}

export default IoK8sApiBatchV1JobTemplateSpecModel;
