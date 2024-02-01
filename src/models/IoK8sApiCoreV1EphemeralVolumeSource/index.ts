import { IoK8sApiCoreV1PersistentVolumeClaimTemplateModelOptions as IoK8sApiCoreV1PersistentVolumeClaimTemplate } from '../IoK8sApiCoreV1PersistentVolumeClaimTemplate';
import { BaseModel } from '../types';
import type { IoK8sApiCoreV1EphemeralVolumeSourceModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1EphemeralVolumeSourceModel extends BaseModel {
  volumeClaimTemplate?: IoK8sApiCoreV1PersistentVolumeClaimTemplate;

  constructor(data: IoK8sApiCoreV1EphemeralVolumeSourceModelOptions) {
    super();
    validate(data);
    this.volumeClaimTemplate = data.volumeClaimTemplate;
  }

  static create(data: IoK8sApiCoreV1EphemeralVolumeSourceModelOptions): IoK8sApiCoreV1EphemeralVolumeSourceModel {
    return new IoK8sApiCoreV1EphemeralVolumeSourceModel(data);
  }

  toObject(): Partial<this> {
    return {
      volumeClaimTemplate: this.volumeClaimTemplate,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1EphemeralVolumeSourceModel;
