# IoK8sApiBatchV1JobStatusModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **number** | The number of pending and running pods. | [optional] [default to undefined]
**completedIndexes** | **string** | completedIndexes holds the completed indexes when .spec.completionMode &#x3D; \&quot;Indexed\&quot; in a text format. The indexes are represented as decimal integers separated by commas. The numbers are listed in increasing order. Three or more consecutive numbers are compressed and represented by the first and last element of the series, separated by a hyphen. For example, if the completed indexes are 1, 3, 4, 5 and 7, they are represented as \&quot;1,3-5,7\&quot;. | [optional] [default to undefined]
**completionTime** | **Date** | Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers. | [optional] [default to undefined]
**conditions** | [**Array&lt;IoK8sApiBatchV1JobCondition&gt;**](IoK8sApiBatchV1JobCondition.md) | The latest available observations of an object\&#39;s current state. When a Job fails, one of the conditions will have type \&quot;Failed\&quot; and status true. When a Job is suspended, one of the conditions will have type \&quot;Suspended\&quot; and status true; when the Job is resumed, the status of this condition will become false. When a Job is completed, one of the conditions will have type \&quot;Complete\&quot; and status true. More info: https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/ | [optional] [default to undefined]
**failed** | **number** | The number of pods which reached phase Failed. | [optional] [default to undefined]
**failedIndexes** | **string** | FailedIndexes holds the failed indexes when backoffLimitPerIndex&#x3D;true. The indexes are represented in the text format analogous as for the &#x60;completedIndexes&#x60; field, ie. they are kept as decimal integers separated by commas. The numbers are listed in increasing order. Three or more consecutive numbers are compressed and represented by the first and last element of the series, separated by a hyphen. For example, if the failed indexes are 1, 3, 4, 5 and 7, they are represented as \&quot;1,3-5,7\&quot;. This field is beta-level. It can be used when the &#x60;JobBackoffLimitPerIndex&#x60; feature gate is enabled (enabled by default). | [optional] [default to undefined]
**ready** | **number** | The number of pods which have a Ready condition. | [optional] [default to undefined]
**startTime** | **Date** | Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers. | [optional] [default to undefined]
**succeeded** | **number** | The number of pods which reached phase Succeeded. | [optional] [default to undefined]
**terminating** | **number** | The number of pods which are terminating (in phase Pending or Running and have a deletionTimestamp).  This field is beta-level. The job controller populates the field when the feature gate JobPodReplacementPolicy is enabled (enabled by default). | [optional] [default to undefined]
**uncountedTerminatedPods** | [**IoK8sApiBatchV1UncountedTerminatedPods**](IoK8sApiBatchV1UncountedTerminatedPods.md) |  | [optional] [default to undefined]


