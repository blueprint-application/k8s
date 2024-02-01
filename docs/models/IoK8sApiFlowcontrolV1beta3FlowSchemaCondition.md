# IoK8sApiFlowcontrolV1beta3FlowSchemaConditionModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lastTransitionTime** | **Date** | Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers. | [optional] [default to undefined]
**message** | **string** | &#x60;message&#x60; is a human-readable message indicating details about last transition. | [optional] [default to undefined]
**reason** | **string** | &#x60;reason&#x60; is a unique, one-word, CamelCase reason for the condition\&#39;s last transition. | [optional] [default to undefined]
**status** | **string** | &#x60;status&#x60; is the status of the condition. Can be True, False, Unknown. Required. | [optional] [default to undefined]
**type** | **string** | &#x60;type&#x60; is the type of the condition. Required. | [optional] [default to undefined]


