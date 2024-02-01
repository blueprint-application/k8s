# IoK8sApiAppsV1DeploymentConditionModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lastTransitionTime** | **Date** | Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers. | [optional] [default to undefined]
**lastUpdateTime** | **Date** | Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers. | [optional] [default to undefined]
**message** | **string** | A human readable message indicating details about the transition. | [optional] [default to undefined]
**reason** | **string** | The reason for the condition\&#39;s last transition. | [optional] [default to undefined]
**status** | **string** | Status of the condition, one of True, False, Unknown. | [default to undefined]
**type** | **string** | Type of deployment condition. | [default to undefined]


