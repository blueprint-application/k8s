# IoK8sApiCoreV1NamespaceConditionModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lastTransitionTime** | **Date** | Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers. | [optional] [default to undefined]
**message** | **string** |  | [optional] [default to undefined]
**reason** | **string** |  | [optional] [default to undefined]
**status** | **string** | Status of the condition, one of True, False, Unknown. | [default to undefined]
**type** | **string** | Type of namespace controller condition. | [default to undefined]


