import { IoK8sApiAuthorizationV1NonResourceAttributesModelOptions as IoK8sApiAuthorizationV1NonResourceAttributes } from '../IoK8sApiAuthorizationV1NonResourceAttributes';
import { IoK8sApiAuthorizationV1ResourceAttributesModelOptions as IoK8sApiAuthorizationV1ResourceAttributes } from '../IoK8sApiAuthorizationV1ResourceAttributes';

export interface IoK8sApiAuthorizationV1SubjectAccessReviewSpecModelOptions {
  extra?: { [key: string]: Array<string> };
  groups?: Array<string>;
  nonResourceAttributes?: IoK8sApiAuthorizationV1NonResourceAttributes;
  resourceAttributes?: IoK8sApiAuthorizationV1ResourceAttributes;
  uid?: string;
  user?: string;
}
