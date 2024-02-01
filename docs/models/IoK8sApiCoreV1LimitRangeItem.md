# IoK8sApiCoreV1LimitRangeItemModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_default** | **{ [key: string]: string; }** | Default resource requirement limit value by resource name if resource limit is omitted. | [optional] [default to undefined]
**defaultRequest** | **{ [key: string]: string; }** | DefaultRequest is the default resource requirement request value by resource name if resource request is omitted. | [optional] [default to undefined]
**max** | **{ [key: string]: string; }** | Max usage constraints on this kind by resource name. | [optional] [default to undefined]
**maxLimitRequestRatio** | **{ [key: string]: string; }** | MaxLimitRequestRatio if specified, the named resource must have a request and limit that are both non-zero where limit divided by request is less than or equal to the enumerated value; this represents the max burst for the named resource. | [optional] [default to undefined]
**min** | **{ [key: string]: string; }** | Min usage constraints on this kind by resource name. | [optional] [default to undefined]
**type** | **string** | Type of resource that this limit applies to. | [default to undefined]


