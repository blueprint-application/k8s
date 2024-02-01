import { BaseModel } from '../types';
import type { IoK8sApiCoreV1VolumeMountModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1VolumeMountModel extends BaseModel {
  // Path within the container at which the volume should be mounted.  Must not contain \':\'.
  mountPath: string;
  // mountPropagation determines how mounts are propagated from the host to container and the other way around. When not set, MountPropagationNone is used. This field is beta in 1.10.
  mountPropagation?: string;
  // This must match the Name of a Volume.
  name: string;
  // Mounted read-only if true, read-write otherwise (false or unspecified). Defaults to false.
  readOnly?: boolean;
  // Path within the volume from which the container\'s volume should be mounted. Defaults to \"\" (volume\'s root).
  subPath?: string;
  // Expanded path within the volume from which the container\'s volume should be mounted. Behaves similarly to SubPath but environment variable references $(VAR_NAME) are expanded using the container\'s environment. Defaults to \"\" (volume\'s root). SubPathExpr and SubPath are mutually exclusive.
  subPathExpr?: string;

  constructor(data: IoK8sApiCoreV1VolumeMountModelOptions) {
    super();
    validate(data);
    this.mountPath = data.mountPath;
    this.mountPropagation = data.mountPropagation;
    this.name = data.name;
    this.readOnly = data.readOnly;
    this.subPath = data.subPath;
    this.subPathExpr = data.subPathExpr;
  }

  static create(data: IoK8sApiCoreV1VolumeMountModelOptions): IoK8sApiCoreV1VolumeMountModel {
    return new IoK8sApiCoreV1VolumeMountModel(data);
  }

  toObject(): Partial<this> {
    return {
      mountPath: this.mountPath,
      mountPropagation: this.mountPropagation,
      name: this.name,
      readOnly: this.readOnly,
      subPath: this.subPath,
      subPathExpr: this.subPathExpr,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1VolumeMountModel;
