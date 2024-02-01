import { IoK8sApiCoreV1ClusterTrustBundleProjectionModelOptions as IoK8sApiCoreV1ClusterTrustBundleProjection } from '../IoK8sApiCoreV1ClusterTrustBundleProjection';
import { IoK8sApiCoreV1ConfigMapProjectionModelOptions as IoK8sApiCoreV1ConfigMapProjection } from '../IoK8sApiCoreV1ConfigMapProjection';
import { IoK8sApiCoreV1DownwardAPIProjectionModelOptions as IoK8sApiCoreV1DownwardAPIProjection } from '../IoK8sApiCoreV1DownwardAPIProjection';
import { IoK8sApiCoreV1SecretProjectionModelOptions as IoK8sApiCoreV1SecretProjection } from '../IoK8sApiCoreV1SecretProjection';
import { IoK8sApiCoreV1ServiceAccountTokenProjectionModelOptions as IoK8sApiCoreV1ServiceAccountTokenProjection } from '../IoK8sApiCoreV1ServiceAccountTokenProjection';

export interface IoK8sApiCoreV1VolumeProjectionModelOptions {
  clusterTrustBundle?: IoK8sApiCoreV1ClusterTrustBundleProjection;
  configMap?: IoK8sApiCoreV1ConfigMapProjection;
  downwardAPI?: IoK8sApiCoreV1DownwardAPIProjection;
  secret?: IoK8sApiCoreV1SecretProjection;
  serviceAccountToken?: IoK8sApiCoreV1ServiceAccountTokenProjection;
}
