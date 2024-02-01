import { IoK8sApimachineryPkgApisMetaV1LabelSelectorModelOptions as IoK8sApimachineryPkgApisMetaV1LabelSelector } from '../IoK8sApimachineryPkgApisMetaV1LabelSelector';
import { BaseModel } from '../types';
import type { IoK8sApiAutoscalingV2MetricIdentifierModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiAutoscalingV2MetricIdentifierModel extends BaseModel {
  // name is the name of the given metric
  name: string;
  selector?: IoK8sApimachineryPkgApisMetaV1LabelSelector;

  constructor(data: IoK8sApiAutoscalingV2MetricIdentifierModelOptions) {
    super();
    validate(data);
    this.name = data.name;
    this.selector = data.selector;
  }

  static create(data: IoK8sApiAutoscalingV2MetricIdentifierModelOptions): IoK8sApiAutoscalingV2MetricIdentifierModel {
    return new IoK8sApiAutoscalingV2MetricIdentifierModel(data);
  }

  toObject(): Partial<this> {
    return {
      name: this.name,
      selector: this.selector,
    } as Partial<this>;
  }
}

export default IoK8sApiAutoscalingV2MetricIdentifierModel;
