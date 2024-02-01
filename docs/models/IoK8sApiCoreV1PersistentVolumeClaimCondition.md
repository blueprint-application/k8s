# IoK8sApiCoreV1PersistentVolumeClaimConditionModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lastProbeTime** | **Date** | Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers. | [optional] [default to undefined]
**lastTransitionTime** | **Date** | Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers. | [optional] [default to undefined]
**message** | **string** | message is the human-readable message indicating details about last transition. | [optional] [default to undefined]
**reason** | **string** | reason is a unique, this should be a short, machine understandable string that gives the reason for condition\&#39;s last transition. If it reports \&quot;Resizing\&quot; that means the underlying persistent volume is being resized. | [optional] [default to undefined]
**status** | **string** |  | [default to undefined]
**type** | **string** |  | [default to undefined]


