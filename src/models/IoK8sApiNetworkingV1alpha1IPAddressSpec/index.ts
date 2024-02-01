import { IoK8sApiNetworkingV1alpha1ParentReferenceModelOptions as IoK8sApiNetworkingV1alpha1ParentReference } from '../IoK8sApiNetworkingV1alpha1ParentReference';
import { BaseModel } from '../types';
import type { IoK8sApiNetworkingV1alpha1IPAddressSpecModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiNetworkingV1alpha1IPAddressSpecModel extends BaseModel {
  parentRef?: IoK8sApiNetworkingV1alpha1ParentReference;

  constructor(data: IoK8sApiNetworkingV1alpha1IPAddressSpecModelOptions) {
    super();
    validate(data);
    this.parentRef = data.parentRef;
  }

  static create(
    data: IoK8sApiNetworkingV1alpha1IPAddressSpecModelOptions,
  ): IoK8sApiNetworkingV1alpha1IPAddressSpecModel {
    return new IoK8sApiNetworkingV1alpha1IPAddressSpecModel(data);
  }

  toObject(): Partial<this> {
    return {
      parentRef: this.parentRef,
    } as Partial<this>;
  }
}

export default IoK8sApiNetworkingV1alpha1IPAddressSpecModel;
