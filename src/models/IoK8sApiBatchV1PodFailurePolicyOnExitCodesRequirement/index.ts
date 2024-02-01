import { BaseModel } from '../types';
import type { IoK8sApiBatchV1PodFailurePolicyOnExitCodesRequirementModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiBatchV1PodFailurePolicyOnExitCodesRequirementModel extends BaseModel {
  // Restricts the check for exit codes to the container with the specified name. When null, the rule applies to all containers. When specified, it should match one the container or initContainer names in the pod template.
  containerName?: string;
  // Represents the relationship between the container exit code(s) and the specified values. Containers completed with success (exit code 0) are excluded from the requirement check. Possible values are:  - In: the requirement is satisfied if at least one container exit code   (might be multiple if there are multiple containers not restricted   by the \'containerName\' field) is in the set of specified values. - NotIn: the requirement is satisfied if at least one container exit code   (might be multiple if there are multiple containers not restricted   by the \'containerName\' field) is not in the set of specified values. Additional values are considered to be added in the future. Clients should react to an unknown operator by assuming the requirement is not satisfied.
  operator: string;
  // Specifies the set of values. Each returned container exit code (might be multiple in case of multiple containers) is checked against this set of values with respect to the operator. The list of values must be ordered and must not contain duplicates. Value \'0\' cannot be used for the In operator. At least one element is required. At most 255 elements are allowed.
  values: Array<number>;

  constructor(data: IoK8sApiBatchV1PodFailurePolicyOnExitCodesRequirementModelOptions) {
    super();
    validate(data);
    this.containerName = data.containerName;
    this.operator = data.operator;
    this.values = data.values;
  }

  static create(
    data: IoK8sApiBatchV1PodFailurePolicyOnExitCodesRequirementModelOptions,
  ): IoK8sApiBatchV1PodFailurePolicyOnExitCodesRequirementModel {
    return new IoK8sApiBatchV1PodFailurePolicyOnExitCodesRequirementModel(data);
  }

  toObject(): Partial<this> {
    return {
      containerName: this.containerName,
      operator: this.operator,
      values: this.values,
    } as Partial<this>;
  }
}

export default IoK8sApiBatchV1PodFailurePolicyOnExitCodesRequirementModel;
