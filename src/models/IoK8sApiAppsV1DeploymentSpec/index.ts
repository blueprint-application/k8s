import { IoK8sApiAppsV1DeploymentStrategyModelOptions as IoK8sApiAppsV1DeploymentStrategy } from '../IoK8sApiAppsV1DeploymentStrategy';
import { IoK8sApiCoreV1PodTemplateSpecModelOptions as IoK8sApiCoreV1PodTemplateSpec } from '../IoK8sApiCoreV1PodTemplateSpec';
import { IoK8sApimachineryPkgApisMetaV1LabelSelectorModelOptions as IoK8sApimachineryPkgApisMetaV1LabelSelector } from '../IoK8sApimachineryPkgApisMetaV1LabelSelector';
import { BaseModel } from '../types';
import type { IoK8sApiAppsV1DeploymentSpecModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiAppsV1DeploymentSpecModel extends BaseModel {
  // Minimum number of seconds for which a newly created pod should be ready without any of its container crashing, for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready)
  minReadySeconds?: number;
  // Indicates that the deployment is paused.
  paused?: boolean;
  // The maximum time in seconds for a deployment to make progress before it is considered to be failed. The deployment controller will continue to process failed deployments and a condition with a ProgressDeadlineExceeded reason will be surfaced in the deployment status. Note that progress will not be estimated during the time a deployment is paused. Defaults to 600s.
  progressDeadlineSeconds?: number;
  // Number of desired pods. This is a pointer to distinguish between explicit zero and not specified. Defaults to 1.
  replicas?: number;
  // The number of old ReplicaSets to retain to allow rollback. This is a pointer to distinguish between explicit zero and not specified. Defaults to 10.
  revisionHistoryLimit?: number;
  selector: IoK8sApimachineryPkgApisMetaV1LabelSelector;
  strategy?: IoK8sApiAppsV1DeploymentStrategy;
  template: IoK8sApiCoreV1PodTemplateSpec;

  constructor(data: IoK8sApiAppsV1DeploymentSpecModelOptions) {
    super();
    validate(data);
    this.minReadySeconds = data.minReadySeconds;
    this.paused = data.paused;
    this.progressDeadlineSeconds = data.progressDeadlineSeconds;
    this.replicas = data.replicas;
    this.revisionHistoryLimit = data.revisionHistoryLimit;
    this.selector = data.selector;
    this.strategy = data.strategy;
    this.template = data.template;
  }

  static create(data: IoK8sApiAppsV1DeploymentSpecModelOptions): IoK8sApiAppsV1DeploymentSpecModel {
    return new IoK8sApiAppsV1DeploymentSpecModel(data);
  }

  toObject(): Partial<this> {
    return {
      minReadySeconds: this.minReadySeconds,
      paused: this.paused,
      progressDeadlineSeconds: this.progressDeadlineSeconds,
      replicas: this.replicas,
      revisionHistoryLimit: this.revisionHistoryLimit,
      selector: this.selector,
      strategy: this.strategy,
      template: this.template,
    } as Partial<this>;
  }
}

export default IoK8sApiAppsV1DeploymentSpecModel;
