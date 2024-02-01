import { IoK8sApiAppsV1DaemonSetUpdateStrategyModelOptions as IoK8sApiAppsV1DaemonSetUpdateStrategy } from '../IoK8sApiAppsV1DaemonSetUpdateStrategy';
import { IoK8sApiCoreV1PodTemplateSpecModelOptions as IoK8sApiCoreV1PodTemplateSpec } from '../IoK8sApiCoreV1PodTemplateSpec';
import { IoK8sApimachineryPkgApisMetaV1LabelSelectorModelOptions as IoK8sApimachineryPkgApisMetaV1LabelSelector } from '../IoK8sApimachineryPkgApisMetaV1LabelSelector';
import { BaseModel } from '../types';
import type { IoK8sApiAppsV1DaemonSetSpecModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiAppsV1DaemonSetSpecModel extends BaseModel {
  // The minimum number of seconds for which a newly created DaemonSet pod should be ready without any of its container crashing, for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready).
  minReadySeconds?: number;
  // The number of old history to retain to allow rollback. This is a pointer to distinguish between explicit zero and not specified. Defaults to 10.
  revisionHistoryLimit?: number;
  selector: IoK8sApimachineryPkgApisMetaV1LabelSelector;
  template: IoK8sApiCoreV1PodTemplateSpec;
  updateStrategy?: IoK8sApiAppsV1DaemonSetUpdateStrategy;

  constructor(data: IoK8sApiAppsV1DaemonSetSpecModelOptions) {
    super();
    validate(data);
    this.minReadySeconds = data.minReadySeconds;
    this.revisionHistoryLimit = data.revisionHistoryLimit;
    this.selector = data.selector;
    this.template = data.template;
    this.updateStrategy = data.updateStrategy;
  }

  static create(data: IoK8sApiAppsV1DaemonSetSpecModelOptions): IoK8sApiAppsV1DaemonSetSpecModel {
    return new IoK8sApiAppsV1DaemonSetSpecModel(data);
  }

  toObject(): Partial<this> {
    return {
      minReadySeconds: this.minReadySeconds,
      revisionHistoryLimit: this.revisionHistoryLimit,
      selector: this.selector,
      template: this.template,
      updateStrategy: this.updateStrategy,
    } as Partial<this>;
  }
}

export default IoK8sApiAppsV1DaemonSetSpecModel;
