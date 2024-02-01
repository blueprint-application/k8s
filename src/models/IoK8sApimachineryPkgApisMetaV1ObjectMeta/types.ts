import { IoK8sApimachineryPkgApisMetaV1ManagedFieldsEntryModelOptions as IoK8sApimachineryPkgApisMetaV1ManagedFieldsEntry } from '../IoK8sApimachineryPkgApisMetaV1ManagedFieldsEntry';
import { IoK8sApimachineryPkgApisMetaV1OwnerReferenceModelOptions as IoK8sApimachineryPkgApisMetaV1OwnerReference } from '../IoK8sApimachineryPkgApisMetaV1OwnerReference';

export interface IoK8sApimachineryPkgApisMetaV1ObjectMetaModelOptions {
  annotations?: { [key: string]: string };
  creationTimestamp?: Date;
  deletionGracePeriodSeconds?: number;
  deletionTimestamp?: Date;
  finalizers?: Array<string>;
  generateName?: string;
  generation?: number;
  labels?: { [key: string]: string };
  managedFields?: Array<IoK8sApimachineryPkgApisMetaV1ManagedFieldsEntry>;
  name?: string;
  namespace?: string;
  ownerReferences?: Array<IoK8sApimachineryPkgApisMetaV1OwnerReference>;
  resourceVersion?: string;
  selfLink?: string;
  uid?: string;
}
