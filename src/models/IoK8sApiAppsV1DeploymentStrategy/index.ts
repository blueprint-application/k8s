import { IoK8sApiAppsV1RollingUpdateDeploymentModelOptions as IoK8sApiAppsV1RollingUpdateDeployment } from '../IoK8sApiAppsV1RollingUpdateDeployment';
import { BaseModel } from '../types';
import type { IoK8sApiAppsV1DeploymentStrategyModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiAppsV1DeploymentStrategyModel extends BaseModel {
  rollingUpdate?: IoK8sApiAppsV1RollingUpdateDeployment;
  // Type of deployment. Can be \"Recreate\" or \"RollingUpdate\". Default is RollingUpdate.
  type?: string;

  constructor(data: IoK8sApiAppsV1DeploymentStrategyModelOptions) {
    super();
    validate(data);
    this.rollingUpdate = data.rollingUpdate;
    this.type = data.type;
  }

  static create(data: IoK8sApiAppsV1DeploymentStrategyModelOptions): IoK8sApiAppsV1DeploymentStrategyModel {
    return new IoK8sApiAppsV1DeploymentStrategyModel(data);
  }

  toObject(): Partial<this> {
    return {
      rollingUpdate: this.rollingUpdate,
      type: this.type,
    } as Partial<this>;
  }
}

export default IoK8sApiAppsV1DeploymentStrategyModel;
