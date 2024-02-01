import { IoK8sApiCoreV1PodTemplateModelOptions as IoK8sApiCoreV1PodTemplate } from '../IoK8sApiCoreV1PodTemplate';
import { IoK8sApimachineryPkgApisMetaV1ListMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ListMeta } from '../IoK8sApimachineryPkgApisMetaV1ListMeta';

export interface IoK8sApiCoreV1PodTemplateListModelOptions {
  apiVersion?: string;
  items: Array<IoK8sApiCoreV1PodTemplate>;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
