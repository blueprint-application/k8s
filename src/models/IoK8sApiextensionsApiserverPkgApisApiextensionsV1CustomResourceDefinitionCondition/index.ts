import { BaseModel } from '../types';
import type { IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionConditionModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionConditionModel extends BaseModel {
  // Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
  lastTransitionTime?: Date;
  // message is a human-readable message indicating details about last transition.
  message?: string;
  // reason is a unique, one-word, CamelCase reason for the condition\'s last transition.
  reason?: string;
  // status is the status of the condition. Can be True, False, Unknown.
  status: string;
  // type is the type of the condition. Types include Established, NamesAccepted and Terminating.
  type: string;

  constructor(data: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionConditionModelOptions) {
    super();
    validate(data);
    this.lastTransitionTime = data.lastTransitionTime;
    this.message = data.message;
    this.reason = data.reason;
    this.status = data.status;
    this.type = data.type;
  }

  static create(
    data: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionConditionModelOptions,
  ): IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionConditionModel {
    return new IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionConditionModel(data);
  }

  toObject(): Partial<this> {
    return {
      lastTransitionTime: this.lastTransitionTime,
      message: this.message,
      reason: this.reason,
      status: this.status,
      type: this.type,
    } as Partial<this>;
  }
}

export default IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionConditionModel;
