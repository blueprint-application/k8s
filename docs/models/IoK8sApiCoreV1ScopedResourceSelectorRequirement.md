# IoK8sApiCoreV1ScopedResourceSelectorRequirementModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operator** | **string** | Represents a scope\&#39;s relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. | [default to undefined]
**scopeName** | **string** | The name of the scope that the selector applies to. | [default to undefined]
**values** | **Array&lt;string&gt;** | An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch. | [optional] [default to undefined]


