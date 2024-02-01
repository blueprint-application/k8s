import { IoK8sApiNetworkingV1IngressClassParametersReferenceModelOptions as IoK8sApiNetworkingV1IngressClassParametersReference } from '../IoK8sApiNetworkingV1IngressClassParametersReference';
import { BaseModel } from '../types';
import type { IoK8sApiNetworkingV1IngressClassSpecModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiNetworkingV1IngressClassSpecModel extends BaseModel {
  // controller refers to the name of the controller that should handle this class. This allows for different \"flavors\" that are controlled by the same controller. For example, you may have different parameters for the same implementing controller. This should be specified as a domain-prefixed path no more than 250 characters in length, e.g. \"acme.io/ingress-controller\". This field is immutable.
  controller?: string;
  parameters?: IoK8sApiNetworkingV1IngressClassParametersReference;

  constructor(data: IoK8sApiNetworkingV1IngressClassSpecModelOptions) {
    super();
    validate(data);
    this.controller = data.controller;
    this.parameters = data.parameters;
  }

  static create(data: IoK8sApiNetworkingV1IngressClassSpecModelOptions): IoK8sApiNetworkingV1IngressClassSpecModel {
    return new IoK8sApiNetworkingV1IngressClassSpecModel(data);
  }

  toObject(): Partial<this> {
    return {
      controller: this.controller,
      parameters: this.parameters,
    } as Partial<this>;
  }
}

export default IoK8sApiNetworkingV1IngressClassSpecModel;
