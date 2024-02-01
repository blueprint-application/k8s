# IoK8sApiCoreV1NodeSelectorRequirementModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **string** | The label key that the selector applies to. | [default to undefined]
**operator** | **string** | Represents a key\&#39;s relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt. | [default to undefined]
**values** | **Array&lt;string&gt;** | An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch. | [optional] [default to undefined]


