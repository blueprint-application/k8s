import { IoK8sApiCoreV1LocalObjectReferenceModelOptions as IoK8sApiCoreV1LocalObjectReference } from '../IoK8sApiCoreV1LocalObjectReference';
import { IoK8sApiCoreV1ObjectReferenceModelOptions as IoK8sApiCoreV1ObjectReference } from '../IoK8sApiCoreV1ObjectReference';
import { IoK8sApimachineryPkgApisMetaV1ObjectMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from '../IoK8sApimachineryPkgApisMetaV1ObjectMeta';

export interface IoK8sApiCoreV1ServiceAccountModelOptions {
  apiVersion?: string;
  automountServiceAccountToken?: boolean;
  imagePullSecrets?: Array<IoK8sApiCoreV1LocalObjectReference>;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  secrets?: Array<IoK8sApiCoreV1ObjectReference>;
}
