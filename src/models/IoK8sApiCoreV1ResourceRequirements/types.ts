import { IoK8sApiCoreV1ResourceClaimModelOptions as IoK8sApiCoreV1ResourceClaim } from '../IoK8sApiCoreV1ResourceClaim';

export interface IoK8sApiCoreV1ResourceRequirementsModelOptions {
  claims?: Array<IoK8sApiCoreV1ResourceClaim>;
  limits?: { [key: string]: string };
  requests?: { [key: string]: string };
}
