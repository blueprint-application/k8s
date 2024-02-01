import { IoK8sApiNetworkingV1HTTPIngressPathModelOptions as IoK8sApiNetworkingV1HTTPIngressPath } from '../IoK8sApiNetworkingV1HTTPIngressPath';
import { BaseModel } from '../types';
import type { IoK8sApiNetworkingV1HTTPIngressRuleValueModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiNetworkingV1HTTPIngressRuleValueModel extends BaseModel {
  // paths is a collection of paths that map requests to backends.
  paths: Array<IoK8sApiNetworkingV1HTTPIngressPath>;

  constructor(data: IoK8sApiNetworkingV1HTTPIngressRuleValueModelOptions) {
    super();
    validate(data);
    this.paths = data.paths;
  }

  static create(
    data: IoK8sApiNetworkingV1HTTPIngressRuleValueModelOptions,
  ): IoK8sApiNetworkingV1HTTPIngressRuleValueModel {
    return new IoK8sApiNetworkingV1HTTPIngressRuleValueModel(data);
  }

  toObject(): Partial<this> {
    return {
      paths: this.paths,
    } as Partial<this>;
  }
}

export default IoK8sApiNetworkingV1HTTPIngressRuleValueModel;
