import { IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceConditionModelOptions as IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceCondition } from '../IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceCondition';
import { BaseModel } from '../types';
import type { IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceStatusModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceStatusModel extends BaseModel {
  // Current service state of apiService.
  conditions?: Array<IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceCondition>;

  constructor(data: IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceStatusModelOptions) {
    super();
    validate(data);
    this.conditions = data.conditions;
  }

  static create(
    data: IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceStatusModelOptions,
  ): IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceStatusModel {
    return new IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceStatusModel(data);
  }

  toObject(): Partial<this> {
    return {
      conditions: this.conditions,
    } as Partial<this>;
  }
}

export default IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceStatusModel;
