# IoK8sApiEventsV1EventModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **string** | action is what action was taken/failed regarding to the regarding object. It is machine-readable. This field cannot be empty for new Events and it can have at most 128 characters. | [optional] [default to undefined]
**apiVersion** | **string** | APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources | [optional] [default to undefined]
**deprecatedCount** | **number** | deprecatedCount is the deprecated field assuring backward compatibility with core.v1 Event type. | [optional] [default to undefined]
**deprecatedFirstTimestamp** | **Date** | Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers. | [optional] [default to undefined]
**deprecatedLastTimestamp** | **Date** | Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers. | [optional] [default to undefined]
**deprecatedSource** | [**IoK8sApiCoreV1EventSource**](IoK8sApiCoreV1EventSource.md) |  | [optional] [default to undefined]
**eventTime** | **Date** | MicroTime is version of Time with microsecond level precision. | [default to undefined]
**kind** | **string** | Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds | [optional] [default to undefined]
**metadata** | [**IoK8sApimachineryPkgApisMetaV1ObjectMeta**](IoK8sApimachineryPkgApisMetaV1ObjectMeta.md) |  | [optional] [default to undefined]
**note** | **string** | note is a human-readable description of the status of this operation. Maximal length of the note is 1kB, but libraries should be prepared to handle values up to 64kB. | [optional] [default to undefined]
**reason** | **string** | reason is why the action was taken. It is human-readable. This field cannot be empty for new Events and it can have at most 128 characters. | [optional] [default to undefined]
**regarding** | [**IoK8sApiCoreV1ObjectReference**](IoK8sApiCoreV1ObjectReference.md) |  | [optional] [default to undefined]
**related** | [**IoK8sApiCoreV1ObjectReference**](IoK8sApiCoreV1ObjectReference.md) |  | [optional] [default to undefined]
**reportingController** | **string** | reportingController is the name of the controller that emitted this Event, e.g. &#x60;kubernetes.io/kubelet&#x60;. This field cannot be empty for new Events. | [optional] [default to undefined]
**reportingInstance** | **string** | reportingInstance is the ID of the controller instance, e.g. &#x60;kubelet-xyzf&#x60;. This field cannot be empty for new Events and it can have at most 128 characters. | [optional] [default to undefined]
**series** | [**IoK8sApiEventsV1EventSeries**](IoK8sApiEventsV1EventSeries.md) |  | [optional] [default to undefined]
**type** | **string** | type is the type of this event (Normal, Warning), new types could be added in the future. It is machine-readable. This field cannot be empty for new Events. | [optional] [default to undefined]


