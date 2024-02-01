import { BaseModel } from '../types';
import type { IoK8sApiCoreV1AzureFilePersistentVolumeSourceModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1AzureFilePersistentVolumeSourceModel extends BaseModel {
  // readOnly defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
  readOnly?: boolean;
  // secretName is the name of secret that contains Azure Storage Account Name and Key
  secretName: string;
  // secretNamespace is the namespace of the secret that contains Azure Storage Account Name and Key default is the same as the Pod
  secretNamespace?: string;
  // shareName is the azure Share Name
  shareName: string;

  constructor(data: IoK8sApiCoreV1AzureFilePersistentVolumeSourceModelOptions) {
    super();
    validate(data);
    this.readOnly = data.readOnly;
    this.secretName = data.secretName;
    this.secretNamespace = data.secretNamespace;
    this.shareName = data.shareName;
  }

  static create(
    data: IoK8sApiCoreV1AzureFilePersistentVolumeSourceModelOptions,
  ): IoK8sApiCoreV1AzureFilePersistentVolumeSourceModel {
    return new IoK8sApiCoreV1AzureFilePersistentVolumeSourceModel(data);
  }

  toObject(): Partial<this> {
    return {
      readOnly: this.readOnly,
      secretName: this.secretName,
      secretNamespace: this.secretNamespace,
      shareName: this.shareName,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1AzureFilePersistentVolumeSourceModel;
