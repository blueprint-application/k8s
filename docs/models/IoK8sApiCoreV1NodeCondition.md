# IoK8sApiCoreV1NodeConditionModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lastHeartbeatTime** | **Date** | Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers. | [optional] [default to undefined]
**lastTransitionTime** | **Date** | Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers. | [optional] [default to undefined]
**message** | **string** | Human readable message indicating details about last transition. | [optional] [default to undefined]
**reason** | **string** | (brief) reason for the condition\&#39;s last transition. | [optional] [default to undefined]
**status** | **string** | Status of the condition, one of True, False, Unknown. | [default to undefined]
**type** | **string** | Type of node condition. | [default to undefined]


