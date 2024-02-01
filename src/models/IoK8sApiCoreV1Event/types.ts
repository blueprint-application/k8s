import { IoK8sApiCoreV1EventSeriesModelOptions as IoK8sApiCoreV1EventSeries } from '../IoK8sApiCoreV1EventSeries';
import { IoK8sApiCoreV1EventSourceModelOptions as IoK8sApiCoreV1EventSource } from '../IoK8sApiCoreV1EventSource';
import { IoK8sApiCoreV1ObjectReferenceModelOptions as IoK8sApiCoreV1ObjectReference } from '../IoK8sApiCoreV1ObjectReference';
import { IoK8sApimachineryPkgApisMetaV1ObjectMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from '../IoK8sApimachineryPkgApisMetaV1ObjectMeta';

export interface IoK8sApiCoreV1EventModelOptions {
  action?: string;
  apiVersion?: string;
  count?: number;
  eventTime?: Date;
  firstTimestamp?: Date;
  involvedObject: IoK8sApiCoreV1ObjectReference;
  kind?: string;
  lastTimestamp?: Date;
  message?: string;
  metadata: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  reason?: string;
  related?: IoK8sApiCoreV1ObjectReference;
  reportingComponent?: string;
  reportingInstance?: string;
  series?: IoK8sApiCoreV1EventSeries;
  source?: IoK8sApiCoreV1EventSource;
  type?: string;
}
