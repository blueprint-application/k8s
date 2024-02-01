# IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionConditionModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lastTransitionTime** | **Date** | Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers. | [optional] [default to undefined]
**message** | **string** | message is a human-readable message indicating details about last transition. | [optional] [default to undefined]
**reason** | **string** | reason is a unique, one-word, CamelCase reason for the condition\&#39;s last transition. | [optional] [default to undefined]
**status** | **string** | status is the status of the condition. Can be True, False, Unknown. | [default to undefined]
**type** | **string** | type is the type of the condition. Types include Established, NamesAccepted and Terminating. | [default to undefined]


