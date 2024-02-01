# IoK8sApiCoreV1TaintModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**effect** | **string** | Required. The effect of the taint on pods that do not tolerate the taint. Valid effects are NoSchedule, PreferNoSchedule and NoExecute. | [default to undefined]
**key** | **string** | Required. The taint key to be applied to a node. | [default to undefined]
**timeAdded** | **Date** | Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers. | [optional] [default to undefined]
**value** | **string** | The taint value corresponding to the taint key. | [optional] [default to undefined]


