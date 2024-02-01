import { IoK8sApiResourceV1alpha2ResourceClaimSpecModelOptions as IoK8sApiResourceV1alpha2ResourceClaimSpec } from '../IoK8sApiResourceV1alpha2ResourceClaimSpec';
import { IoK8sApimachineryPkgApisMetaV1ObjectMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from '../IoK8sApimachineryPkgApisMetaV1ObjectMeta';
import { BaseModel } from '../types';
import type { IoK8sApiResourceV1alpha2ResourceClaimTemplateSpecModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiResourceV1alpha2ResourceClaimTemplateSpecModel extends BaseModel {
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  spec: IoK8sApiResourceV1alpha2ResourceClaimSpec;

  constructor(data: IoK8sApiResourceV1alpha2ResourceClaimTemplateSpecModelOptions) {
    super();
    validate(data);
    this.metadata = data.metadata;
    this.spec = data.spec;
  }

  static create(
    data: IoK8sApiResourceV1alpha2ResourceClaimTemplateSpecModelOptions,
  ): IoK8sApiResourceV1alpha2ResourceClaimTemplateSpecModel {
    return new IoK8sApiResourceV1alpha2ResourceClaimTemplateSpecModel(data);
  }

  toObject(): Partial<this> {
    return {
      metadata: this.metadata,
      spec: this.spec,
    } as Partial<this>;
  }
}

export default IoK8sApiResourceV1alpha2ResourceClaimTemplateSpecModel;
