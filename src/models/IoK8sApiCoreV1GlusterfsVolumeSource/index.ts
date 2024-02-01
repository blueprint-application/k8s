import { BaseModel } from '../types';
import type { IoK8sApiCoreV1GlusterfsVolumeSourceModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1GlusterfsVolumeSourceModel extends BaseModel {
  // endpoints is the endpoint name that details Glusterfs topology. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod
  endpoints: string;
  // path is the Glusterfs volume path. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod
  path: string;
  // readOnly here will force the Glusterfs volume to be mounted with read-only permissions. Defaults to false. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod
  readOnly?: boolean;

  constructor(data: IoK8sApiCoreV1GlusterfsVolumeSourceModelOptions) {
    super();
    validate(data);
    this.endpoints = data.endpoints;
    this.path = data.path;
    this.readOnly = data.readOnly;
  }

  static create(data: IoK8sApiCoreV1GlusterfsVolumeSourceModelOptions): IoK8sApiCoreV1GlusterfsVolumeSourceModel {
    return new IoK8sApiCoreV1GlusterfsVolumeSourceModel(data);
  }

  toObject(): Partial<this> {
    return {
      endpoints: this.endpoints,
      path: this.path,
      readOnly: this.readOnly,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1GlusterfsVolumeSourceModel;
