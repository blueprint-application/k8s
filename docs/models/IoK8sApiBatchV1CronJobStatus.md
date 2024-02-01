# IoK8sApiBatchV1CronJobStatusModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | [**Array&lt;IoK8sApiCoreV1ObjectReference&gt;**](IoK8sApiCoreV1ObjectReference.md) | A list of pointers to currently running jobs. | [optional] [default to undefined]
**lastScheduleTime** | **Date** | Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers. | [optional] [default to undefined]
**lastSuccessfulTime** | **Date** | Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers. | [optional] [default to undefined]


