import { BaseModel } from '../types';
import type { IoK8sApiCoreV1AzureFileVolumeSourceModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1AzureFileVolumeSourceModel extends BaseModel {
  // readOnly defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
  readOnly?: boolean;
  // secretName is the  name of secret that contains Azure Storage Account Name and Key
  secretName: string;
  // shareName is the azure share Name
  shareName: string;

  constructor(data: IoK8sApiCoreV1AzureFileVolumeSourceModelOptions) {
    super();
    validate(data);
    this.readOnly = data.readOnly;
    this.secretName = data.secretName;
    this.shareName = data.shareName;
  }

  static create(data: IoK8sApiCoreV1AzureFileVolumeSourceModelOptions): IoK8sApiCoreV1AzureFileVolumeSourceModel {
    return new IoK8sApiCoreV1AzureFileVolumeSourceModel(data);
  }

  toObject(): Partial<this> {
    return {
      readOnly: this.readOnly,
      secretName: this.secretName,
      shareName: this.shareName,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1AzureFileVolumeSourceModel;
