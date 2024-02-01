import { BaseModel } from '../types';
import type { IoK8sApiCoreV1VolumeResourceRequirementsModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1VolumeResourceRequirementsModel extends BaseModel {
  // Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  limits?: { [key: string]: string };
  // Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  requests?: { [key: string]: string };

  constructor(data: IoK8sApiCoreV1VolumeResourceRequirementsModelOptions) {
    super();
    validate(data);
    this.limits = data.limits;
    this.requests = data.requests;
  }

  static create(
    data: IoK8sApiCoreV1VolumeResourceRequirementsModelOptions,
  ): IoK8sApiCoreV1VolumeResourceRequirementsModel {
    return new IoK8sApiCoreV1VolumeResourceRequirementsModel(data);
  }

  toObject(): Partial<this> {
    return {
      limits: this.limits,
      requests: this.requests,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1VolumeResourceRequirementsModel;
