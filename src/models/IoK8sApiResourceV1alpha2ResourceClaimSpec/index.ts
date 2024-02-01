import { IoK8sApiResourceV1alpha2ResourceClaimParametersReferenceModelOptions as IoK8sApiResourceV1alpha2ResourceClaimParametersReference } from '../IoK8sApiResourceV1alpha2ResourceClaimParametersReference';
import { BaseModel } from '../types';
import type { IoK8sApiResourceV1alpha2ResourceClaimSpecModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiResourceV1alpha2ResourceClaimSpecModel extends BaseModel {
  // Allocation can start immediately or when a Pod wants to use the resource. \"WaitForFirstConsumer\" is the default.
  allocationMode?: string;
  parametersRef?: IoK8sApiResourceV1alpha2ResourceClaimParametersReference;
  // ResourceClassName references the driver and additional parameters via the name of a ResourceClass that was created as part of the driver deployment.
  resourceClassName: string;

  constructor(data: IoK8sApiResourceV1alpha2ResourceClaimSpecModelOptions) {
    super();
    validate(data);
    this.allocationMode = data.allocationMode;
    this.parametersRef = data.parametersRef;
    this.resourceClassName = data.resourceClassName;
  }

  static create(
    data: IoK8sApiResourceV1alpha2ResourceClaimSpecModelOptions,
  ): IoK8sApiResourceV1alpha2ResourceClaimSpecModel {
    return new IoK8sApiResourceV1alpha2ResourceClaimSpecModel(data);
  }

  toObject(): Partial<this> {
    return {
      allocationMode: this.allocationMode,
      parametersRef: this.parametersRef,
      resourceClassName: this.resourceClassName,
    } as Partial<this>;
  }
}

export default IoK8sApiResourceV1alpha2ResourceClaimSpecModel;
