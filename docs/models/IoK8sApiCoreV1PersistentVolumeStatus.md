# IoK8sApiCoreV1PersistentVolumeStatusModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lastPhaseTransitionTime** | **Date** | Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers. | [optional] [default to undefined]
**message** | **string** | message is a human-readable message indicating details about why the volume is in this state. | [optional] [default to undefined]
**phase** | **string** | phase indicates if a volume is available, bound to a claim, or released by a claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#phase | [optional] [default to undefined]
**reason** | **string** | reason is a brief CamelCase string that describes any failure and is meant for machine parsing and tidy display in the CLI. | [optional] [default to undefined]


