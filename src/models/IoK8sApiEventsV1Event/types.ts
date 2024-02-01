import { IoK8sApiCoreV1EventSourceModelOptions as IoK8sApiCoreV1EventSource } from '../IoK8sApiCoreV1EventSource';
import { IoK8sApiCoreV1ObjectReferenceModelOptions as IoK8sApiCoreV1ObjectReference } from '../IoK8sApiCoreV1ObjectReference';
import { IoK8sApiEventsV1EventSeriesModelOptions as IoK8sApiEventsV1EventSeries } from '../IoK8sApiEventsV1EventSeries';
import { IoK8sApimachineryPkgApisMetaV1ObjectMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from '../IoK8sApimachineryPkgApisMetaV1ObjectMeta';

export interface IoK8sApiEventsV1EventModelOptions {
  action?: string;
  apiVersion?: string;
  deprecatedCount?: number;
  deprecatedFirstTimestamp?: Date;
  deprecatedLastTimestamp?: Date;
  deprecatedSource?: IoK8sApiCoreV1EventSource;
  eventTime: Date;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  note?: string;
  reason?: string;
  regarding?: IoK8sApiCoreV1ObjectReference;
  related?: IoK8sApiCoreV1ObjectReference;
  reportingController?: string;
  reportingInstance?: string;
  series?: IoK8sApiEventsV1EventSeries;
  type?: string;
}
