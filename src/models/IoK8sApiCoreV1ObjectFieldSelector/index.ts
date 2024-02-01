import { BaseModel } from '../types';
import type { IoK8sApiCoreV1ObjectFieldSelectorModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1ObjectFieldSelectorModel extends BaseModel {
  // Version of the schema the FieldPath is written in terms of, defaults to \"v1\".
  apiVersion?: string;
  // Path of the field to select in the specified API version.
  fieldPath: string;

  constructor(data: IoK8sApiCoreV1ObjectFieldSelectorModelOptions) {
    super();
    validate(data);
    this.apiVersion = data.apiVersion;
    this.fieldPath = data.fieldPath;
  }

  static create(data: IoK8sApiCoreV1ObjectFieldSelectorModelOptions): IoK8sApiCoreV1ObjectFieldSelectorModel {
    return new IoK8sApiCoreV1ObjectFieldSelectorModel(data);
  }

  toObject(): Partial<this> {
    return {
      apiVersion: this.apiVersion,
      fieldPath: this.fieldPath,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1ObjectFieldSelectorModel;
