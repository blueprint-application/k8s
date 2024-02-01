import { BaseModel } from '../types';
import type { IoK8sApiApiserverinternalV1alpha1ServerStorageVersionModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiApiserverinternalV1alpha1ServerStorageVersionModel extends BaseModel {
  // The ID of the reporting API server.
  apiServerID?: string;
  // The API server can decode objects encoded in these versions. The encodingVersion must be included in the decodableVersions.
  decodableVersions?: Array<string>;
  // The API server encodes the object to this version when persisting it in the backend (e.g., etcd).
  encodingVersion?: string;
  // The API server can serve these versions. DecodableVersions must include all ServedVersions.
  servedVersions?: Array<string>;

  constructor(data: IoK8sApiApiserverinternalV1alpha1ServerStorageVersionModelOptions) {
    super();
    validate(data);
    this.apiServerID = data.apiServerID;
    this.decodableVersions = data.decodableVersions;
    this.encodingVersion = data.encodingVersion;
    this.servedVersions = data.servedVersions;
  }

  static create(
    data: IoK8sApiApiserverinternalV1alpha1ServerStorageVersionModelOptions,
  ): IoK8sApiApiserverinternalV1alpha1ServerStorageVersionModel {
    return new IoK8sApiApiserverinternalV1alpha1ServerStorageVersionModel(data);
  }

  toObject(): Partial<this> {
    return {
      apiServerID: this.apiServerID,
      decodableVersions: this.decodableVersions,
      encodingVersion: this.encodingVersion,
      servedVersions: this.servedVersions,
    } as Partial<this>;
  }
}

export default IoK8sApiApiserverinternalV1alpha1ServerStorageVersionModel;
