import { IoK8sApiCoreV1NodeSelectorModelOptions as IoK8sApiCoreV1NodeSelector } from '../IoK8sApiCoreV1NodeSelector';
import { IoK8sApiResourceV1alpha2ResourceClassParametersReferenceModelOptions as IoK8sApiResourceV1alpha2ResourceClassParametersReference } from '../IoK8sApiResourceV1alpha2ResourceClassParametersReference';
import { IoK8sApimachineryPkgApisMetaV1ObjectMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from '../IoK8sApimachineryPkgApisMetaV1ObjectMeta';

export interface IoK8sApiResourceV1alpha2ResourceClassModelOptions {
  apiVersion?: string;
  driverName: string;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  parametersRef?: IoK8sApiResourceV1alpha2ResourceClassParametersReference;
  suitableNodes?: IoK8sApiCoreV1NodeSelector;
}
