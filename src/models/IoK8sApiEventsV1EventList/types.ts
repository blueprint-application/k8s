import { IoK8sApiEventsV1EventModelOptions as IoK8sApiEventsV1Event } from '../IoK8sApiEventsV1Event';
import { IoK8sApimachineryPkgApisMetaV1ListMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ListMeta } from '../IoK8sApimachineryPkgApisMetaV1ListMeta';

export interface IoK8sApiEventsV1EventListModelOptions {
  apiVersion?: string;
  items: Array<IoK8sApiEventsV1Event>;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
