import { IoK8sApimachineryPkgApisMetaV1PreconditionsModelOptions as IoK8sApimachineryPkgApisMetaV1Preconditions } from '../IoK8sApimachineryPkgApisMetaV1Preconditions';

export interface IoK8sApimachineryPkgApisMetaV1DeleteOptionsModelOptions {
  apiVersion?: string;
  dryRun?: Array<string>;
  gracePeriodSeconds?: number;
  kind?: string;
  orphanDependents?: boolean;
  preconditions?: IoK8sApimachineryPkgApisMetaV1Preconditions;
  propagationPolicy?: string;
}
