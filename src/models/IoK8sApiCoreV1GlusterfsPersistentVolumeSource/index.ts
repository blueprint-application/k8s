import { BaseModel } from '../types';
import type { IoK8sApiCoreV1GlusterfsPersistentVolumeSourceModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1GlusterfsPersistentVolumeSourceModel extends BaseModel {
  // endpoints is the endpoint name that details Glusterfs topology. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod
  endpoints: string;
  // endpointsNamespace is the namespace that contains Glusterfs endpoint. If this field is empty, the EndpointNamespace defaults to the same namespace as the bound PVC. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod
  endpointsNamespace?: string;
  // path is the Glusterfs volume path. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod
  path: string;
  // readOnly here will force the Glusterfs volume to be mounted with read-only permissions. Defaults to false. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod
  readOnly?: boolean;

  constructor(data: IoK8sApiCoreV1GlusterfsPersistentVolumeSourceModelOptions) {
    super();
    validate(data);
    this.endpoints = data.endpoints;
    this.endpointsNamespace = data.endpointsNamespace;
    this.path = data.path;
    this.readOnly = data.readOnly;
  }

  static create(
    data: IoK8sApiCoreV1GlusterfsPersistentVolumeSourceModelOptions,
  ): IoK8sApiCoreV1GlusterfsPersistentVolumeSourceModel {
    return new IoK8sApiCoreV1GlusterfsPersistentVolumeSourceModel(data);
  }

  toObject(): Partial<this> {
    return {
      endpoints: this.endpoints,
      endpointsNamespace: this.endpointsNamespace,
      path: this.path,
      readOnly: this.readOnly,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1GlusterfsPersistentVolumeSourceModel;
