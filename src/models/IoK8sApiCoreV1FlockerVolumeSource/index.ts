import { BaseModel } from '../types';
import type { IoK8sApiCoreV1FlockerVolumeSourceModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1FlockerVolumeSourceModel extends BaseModel {
  // datasetName is Name of the dataset stored as metadata -> name on the dataset for Flocker should be considered as deprecated
  datasetName?: string;
  // datasetUUID is the UUID of the dataset. This is unique identifier of a Flocker dataset
  datasetUUID?: string;

  constructor(data: IoK8sApiCoreV1FlockerVolumeSourceModelOptions) {
    super();
    validate(data);
    this.datasetName = data.datasetName;
    this.datasetUUID = data.datasetUUID;
  }

  static create(data: IoK8sApiCoreV1FlockerVolumeSourceModelOptions): IoK8sApiCoreV1FlockerVolumeSourceModel {
    return new IoK8sApiCoreV1FlockerVolumeSourceModel(data);
  }

  toObject(): Partial<this> {
    return {
      datasetName: this.datasetName,
      datasetUUID: this.datasetUUID,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1FlockerVolumeSourceModel;
