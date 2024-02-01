import { IoK8sApiAppsV1DeploymentSpecModelOptions as IoK8sApiAppsV1DeploymentSpec } from '../IoK8sApiAppsV1DeploymentSpec';
import { IoK8sApiAppsV1DeploymentStatusModelOptions as IoK8sApiAppsV1DeploymentStatus } from '../IoK8sApiAppsV1DeploymentStatus';
import { IoK8sApimachineryPkgApisMetaV1ObjectMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from '../IoK8sApimachineryPkgApisMetaV1ObjectMeta';

export interface IoK8sApiAppsV1DeploymentModelOptions {
  apiVersion?: string;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  spec?: IoK8sApiAppsV1DeploymentSpec;
  status?: IoK8sApiAppsV1DeploymentStatus;
}
