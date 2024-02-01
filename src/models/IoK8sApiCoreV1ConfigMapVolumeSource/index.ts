import { IoK8sApiCoreV1KeyToPathModelOptions as IoK8sApiCoreV1KeyToPath } from '../IoK8sApiCoreV1KeyToPath';
import { BaseModel } from '../types';
import type { IoK8sApiCoreV1ConfigMapVolumeSourceModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1ConfigMapVolumeSourceModel extends BaseModel {
  // defaultMode is optional: mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  defaultMode?: number;
  // items if unspecified, each key-value pair in the Data field of the referenced ConfigMap will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the ConfigMap, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the \'..\' path or start with \'..\'.
  items?: Array<IoK8sApiCoreV1KeyToPath>;
  // Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  name?: string;
  // optional specify whether the ConfigMap or its keys must be defined
  optional?: boolean;

  constructor(data: IoK8sApiCoreV1ConfigMapVolumeSourceModelOptions) {
    super();
    validate(data);
    this.defaultMode = data.defaultMode;
    this.items = data.items;
    this.name = data.name;
    this.optional = data.optional;
  }

  static create(data: IoK8sApiCoreV1ConfigMapVolumeSourceModelOptions): IoK8sApiCoreV1ConfigMapVolumeSourceModel {
    return new IoK8sApiCoreV1ConfigMapVolumeSourceModel(data);
  }

  toObject(): Partial<this> {
    return {
      defaultMode: this.defaultMode,
      items: this.items,
      name: this.name,
      optional: this.optional,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1ConfigMapVolumeSourceModel;
