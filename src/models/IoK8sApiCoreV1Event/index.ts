import { IoK8sApiCoreV1EventSeriesModelOptions as IoK8sApiCoreV1EventSeries } from '../IoK8sApiCoreV1EventSeries';
import { IoK8sApiCoreV1EventSourceModelOptions as IoK8sApiCoreV1EventSource } from '../IoK8sApiCoreV1EventSource';
import { IoK8sApiCoreV1ObjectReferenceModelOptions as IoK8sApiCoreV1ObjectReference } from '../IoK8sApiCoreV1ObjectReference';
import { IoK8sApimachineryPkgApisMetaV1ObjectMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from '../IoK8sApimachineryPkgApisMetaV1ObjectMeta';
import { BaseModel } from '../types';
import type { IoK8sApiCoreV1EventModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1EventModel extends BaseModel {
  // What action was taken/failed regarding to the Regarding object.
  action?: string;
  // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
  apiVersion?: string;
  // The number of times this event has occurred.
  count?: number;
  // MicroTime is version of Time with microsecond level precision.
  eventTime?: Date;
  // Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
  firstTimestamp?: Date;
  involvedObject: IoK8sApiCoreV1ObjectReference;
  // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  kind?: string;
  // Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
  lastTimestamp?: Date;
  // A human-readable description of the status of this operation.
  message?: string;
  metadata: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  // This should be a short, machine understandable string that gives the reason for the transition into the object\'s current status.
  reason?: string;
  related?: IoK8sApiCoreV1ObjectReference;
  // Name of the controller that emitted this Event, e.g. `kubernetes.io/kubelet`.
  reportingComponent?: string;
  // ID of the controller instance, e.g. `kubelet-xyzf`.
  reportingInstance?: string;
  series?: IoK8sApiCoreV1EventSeries;
  source?: IoK8sApiCoreV1EventSource;
  // Type of this event (Normal, Warning), new types could be added in the future
  type?: string;

  constructor(data: IoK8sApiCoreV1EventModelOptions) {
    super();
    validate(data);
    this.action = data.action;
    this.apiVersion = data.apiVersion;
    this.count = data.count;
    this.eventTime = data.eventTime;
    this.firstTimestamp = data.firstTimestamp;
    this.involvedObject = data.involvedObject;
    this.kind = data.kind;
    this.lastTimestamp = data.lastTimestamp;
    this.message = data.message;
    this.metadata = data.metadata;
    this.reason = data.reason;
    this.related = data.related;
    this.reportingComponent = data.reportingComponent;
    this.reportingInstance = data.reportingInstance;
    this.series = data.series;
    this.source = data.source;
    this.type = data.type;
  }

  static create(data: IoK8sApiCoreV1EventModelOptions): IoK8sApiCoreV1EventModel {
    return new IoK8sApiCoreV1EventModel(data);
  }

  toObject(): Partial<this> {
    return {
      action: this.action,
      apiVersion: this.apiVersion,
      count: this.count,
      eventTime: this.eventTime,
      firstTimestamp: this.firstTimestamp,
      involvedObject: this.involvedObject,
      kind: this.kind,
      lastTimestamp: this.lastTimestamp,
      message: this.message,
      metadata: this.metadata,
      reason: this.reason,
      related: this.related,
      reportingComponent: this.reportingComponent,
      reportingInstance: this.reportingInstance,
      series: this.series,
      source: this.source,
      type: this.type,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1EventModel;
