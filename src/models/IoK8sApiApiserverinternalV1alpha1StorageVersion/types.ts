import { IoK8sApiApiserverinternalV1alpha1StorageVersionStatusModelOptions as IoK8sApiApiserverinternalV1alpha1StorageVersionStatus } from '../IoK8sApiApiserverinternalV1alpha1StorageVersionStatus';
import { IoK8sApimachineryPkgApisMetaV1ObjectMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from '../IoK8sApimachineryPkgApisMetaV1ObjectMeta';

export interface IoK8sApiApiserverinternalV1alpha1StorageVersionModelOptions {
  apiVersion?: string;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  spec: any;
  status: IoK8sApiApiserverinternalV1alpha1StorageVersionStatus;
}
