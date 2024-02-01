import { IoK8sApiAppsV1DeploymentModelOptions as IoK8sApiAppsV1Deployment } from '../IoK8sApiAppsV1Deployment';
import { IoK8sApimachineryPkgApisMetaV1ListMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ListMeta } from '../IoK8sApimachineryPkgApisMetaV1ListMeta';

export interface IoK8sApiAppsV1DeploymentListModelOptions {
  apiVersion?: string;
  items: Array<IoK8sApiAppsV1Deployment>;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
