import { BaseModel } from '../types';
import type { IoK8sApiCoreV1ComponentConditionModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1ComponentConditionModel extends BaseModel {
  // Condition error code for a component. For example, a health check error code.
  error?: string;
  // Message about the condition for a component. For example, information about a health check.
  message?: string;
  // Status of the condition for a component. Valid values for \"Healthy\": \"True\", \"False\", or \"Unknown\".
  status: string;
  // Type of condition for a component. Valid value: \"Healthy\"
  type: string;

  constructor(data: IoK8sApiCoreV1ComponentConditionModelOptions) {
    super();
    validate(data);
    this.error = data.error;
    this.message = data.message;
    this.status = data.status;
    this.type = data.type;
  }

  static create(data: IoK8sApiCoreV1ComponentConditionModelOptions): IoK8sApiCoreV1ComponentConditionModel {
    return new IoK8sApiCoreV1ComponentConditionModel(data);
  }

  toObject(): Partial<this> {
    return {
      error: this.error,
      message: this.message,
      status: this.status,
      type: this.type,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1ComponentConditionModel;
