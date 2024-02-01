# IoK8sApimachineryPkgApisMetaV1ConditionModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lastTransitionTime** | **Date** | Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers. | [default to undefined]
**message** | **string** | message is a human readable message indicating details about the transition. This may be an empty string. | [default to undefined]
**observedGeneration** | **number** | observedGeneration represents the .metadata.generation that the condition was set based upon. For instance, if .metadata.generation is currently 12, but the .status.conditions[x].observedGeneration is 9, the condition is out of date with respect to the current state of the instance. | [optional] [default to undefined]
**reason** | **string** | reason contains a programmatic identifier indicating the reason for the condition\&#39;s last transition. Producers of specific condition types may define expected values and meanings for this field, and whether the values are considered a guaranteed API. The value should be a CamelCase string. This field may not be empty. | [default to undefined]
**status** | **string** | status of the condition, one of True, False, Unknown. | [default to undefined]
**type** | **string** | type of condition in CamelCase or in foo.example.com/CamelCase. | [default to undefined]


