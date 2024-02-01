import { IoK8sApiCoreV1ClusterTrustBundleProjectionModelOptions as IoK8sApiCoreV1ClusterTrustBundleProjection } from '../IoK8sApiCoreV1ClusterTrustBundleProjection';
import { IoK8sApiCoreV1ConfigMapProjectionModelOptions as IoK8sApiCoreV1ConfigMapProjection } from '../IoK8sApiCoreV1ConfigMapProjection';
import { IoK8sApiCoreV1DownwardAPIProjectionModelOptions as IoK8sApiCoreV1DownwardAPIProjection } from '../IoK8sApiCoreV1DownwardAPIProjection';
import { IoK8sApiCoreV1SecretProjectionModelOptions as IoK8sApiCoreV1SecretProjection } from '../IoK8sApiCoreV1SecretProjection';
import { IoK8sApiCoreV1ServiceAccountTokenProjectionModelOptions as IoK8sApiCoreV1ServiceAccountTokenProjection } from '../IoK8sApiCoreV1ServiceAccountTokenProjection';
import { BaseModel } from '../types';
import type { IoK8sApiCoreV1VolumeProjectionModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1VolumeProjectionModel extends BaseModel {
  clusterTrustBundle?: IoK8sApiCoreV1ClusterTrustBundleProjection;
  configMap?: IoK8sApiCoreV1ConfigMapProjection;
  downwardAPI?: IoK8sApiCoreV1DownwardAPIProjection;
  secret?: IoK8sApiCoreV1SecretProjection;
  serviceAccountToken?: IoK8sApiCoreV1ServiceAccountTokenProjection;

  constructor(data: IoK8sApiCoreV1VolumeProjectionModelOptions) {
    super();
    validate(data);
    this.clusterTrustBundle = data.clusterTrustBundle;
    this.configMap = data.configMap;
    this.downwardAPI = data.downwardAPI;
    this.secret = data.secret;
    this.serviceAccountToken = data.serviceAccountToken;
  }

  static create(data: IoK8sApiCoreV1VolumeProjectionModelOptions): IoK8sApiCoreV1VolumeProjectionModel {
    return new IoK8sApiCoreV1VolumeProjectionModel(data);
  }

  toObject(): Partial<this> {
    return {
      clusterTrustBundle: this.clusterTrustBundle,
      configMap: this.configMap,
      downwardAPI: this.downwardAPI,
      secret: this.secret,
      serviceAccountToken: this.serviceAccountToken,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1VolumeProjectionModel;
