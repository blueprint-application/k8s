import { IoK8sApiCoreV1EventSourceModelOptions as IoK8sApiCoreV1EventSource } from '../IoK8sApiCoreV1EventSource';
import { IoK8sApiCoreV1ObjectReferenceModelOptions as IoK8sApiCoreV1ObjectReference } from '../IoK8sApiCoreV1ObjectReference';
import { IoK8sApiEventsV1EventSeriesModelOptions as IoK8sApiEventsV1EventSeries } from '../IoK8sApiEventsV1EventSeries';
import { IoK8sApimachineryPkgApisMetaV1ObjectMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from '../IoK8sApimachineryPkgApisMetaV1ObjectMeta';
import { BaseModel } from '../types';
import type { IoK8sApiEventsV1EventModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiEventsV1EventModel extends BaseModel {
  // action is what action was taken/failed regarding to the regarding object. It is machine-readable. This field cannot be empty for new Events and it can have at most 128 characters.
  action?: string;
  // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
  apiVersion?: string;
  // deprecatedCount is the deprecated field assuring backward compatibility with core.v1 Event type.
  deprecatedCount?: number;
  // Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
  deprecatedFirstTimestamp?: Date;
  // Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
  deprecatedLastTimestamp?: Date;
  deprecatedSource?: IoK8sApiCoreV1EventSource;
  // MicroTime is version of Time with microsecond level precision.
  eventTime: Date;
  // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  // note is a human-readable description of the status of this operation. Maximal length of the note is 1kB, but libraries should be prepared to handle values up to 64kB.
  note?: string;
  // reason is why the action was taken. It is human-readable. This field cannot be empty for new Events and it can have at most 128 characters.
  reason?: string;
  regarding?: IoK8sApiCoreV1ObjectReference;
  related?: IoK8sApiCoreV1ObjectReference;
  // reportingController is the name of the controller that emitted this Event, e.g. `kubernetes.io/kubelet`. This field cannot be empty for new Events.
  reportingController?: string;
  // reportingInstance is the ID of the controller instance, e.g. `kubelet-xyzf`. This field cannot be empty for new Events and it can have at most 128 characters.
  reportingInstance?: string;
  series?: IoK8sApiEventsV1EventSeries;
  // type is the type of this event (Normal, Warning), new types could be added in the future. It is machine-readable. This field cannot be empty for new Events.
  type?: string;

  constructor(data: IoK8sApiEventsV1EventModelOptions) {
    super();
    validate(data);
    this.action = data.action;
    this.apiVersion = data.apiVersion;
    this.deprecatedCount = data.deprecatedCount;
    this.deprecatedFirstTimestamp = data.deprecatedFirstTimestamp;
    this.deprecatedLastTimestamp = data.deprecatedLastTimestamp;
    this.deprecatedSource = data.deprecatedSource;
    this.eventTime = data.eventTime;
    this.kind = data.kind;
    this.metadata = data.metadata;
    this.note = data.note;
    this.reason = data.reason;
    this.regarding = data.regarding;
    this.related = data.related;
    this.reportingController = data.reportingController;
    this.reportingInstance = data.reportingInstance;
    this.series = data.series;
    this.type = data.type;
  }

  static create(data: IoK8sApiEventsV1EventModelOptions): IoK8sApiEventsV1EventModel {
    return new IoK8sApiEventsV1EventModel(data);
  }

  toObject(): Partial<this> {
    return {
      action: this.action,
      apiVersion: this.apiVersion,
      deprecatedCount: this.deprecatedCount,
      deprecatedFirstTimestamp: this.deprecatedFirstTimestamp,
      deprecatedLastTimestamp: this.deprecatedLastTimestamp,
      deprecatedSource: this.deprecatedSource,
      eventTime: this.eventTime,
      kind: this.kind,
      metadata: this.metadata,
      note: this.note,
      reason: this.reason,
      regarding: this.regarding,
      related: this.related,
      reportingController: this.reportingController,
      reportingInstance: this.reportingInstance,
      series: this.series,
      type: this.type,
    } as Partial<this>;
  }
}

export default IoK8sApiEventsV1EventModel;
