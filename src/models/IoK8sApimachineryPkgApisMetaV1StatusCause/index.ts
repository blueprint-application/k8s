import { BaseModel } from '../types';
import type { IoK8sApimachineryPkgApisMetaV1StatusCauseModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApimachineryPkgApisMetaV1StatusCauseModel extends BaseModel {
  // The field of the resource that has caused this error, as named by its JSON serialization. May include dot and postfix notation for nested attributes. Arrays are zero-indexed.  Fields may appear more than once in an array of causes due to fields having multiple errors. Optional.  Examples:   \"name\" - the field \"name\" on the current resource   \"items[0].name\" - the field \"name\" on the first array entry in \"items\"
  field?: string;
  // A human-readable description of the cause of the error.  This field may be presented as-is to a reader.
  message?: string;
  // A machine-readable description of the cause of the error. If this value is empty there is no information available.
  reason?: string;

  constructor(data: IoK8sApimachineryPkgApisMetaV1StatusCauseModelOptions) {
    super();
    validate(data);
    this.field = data.field;
    this.message = data.message;
    this.reason = data.reason;
  }

  static create(
    data: IoK8sApimachineryPkgApisMetaV1StatusCauseModelOptions,
  ): IoK8sApimachineryPkgApisMetaV1StatusCauseModel {
    return new IoK8sApimachineryPkgApisMetaV1StatusCauseModel(data);
  }

  toObject(): Partial<this> {
    return {
      field: this.field,
      message: this.message,
      reason: this.reason,
    } as Partial<this>;
  }
}

export default IoK8sApimachineryPkgApisMetaV1StatusCauseModel;
