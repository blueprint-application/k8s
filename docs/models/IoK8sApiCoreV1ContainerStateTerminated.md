# IoK8sApiCoreV1ContainerStateTerminatedModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**containerID** | **string** | Container\&#39;s ID in the format \&#39;&lt;type&gt;://&lt;container_id&gt;\&#39; | [optional] [default to undefined]
**exitCode** | **number** | Exit status from the last termination of the container | [default to undefined]
**finishedAt** | **Date** | Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers. | [optional] [default to undefined]
**message** | **string** | Message regarding the last termination of the container | [optional] [default to undefined]
**reason** | **string** | (brief) reason from the last termination of the container | [optional] [default to undefined]
**signal** | **number** | Signal from the last termination of the container | [optional] [default to undefined]
**startedAt** | **Date** | Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers. | [optional] [default to undefined]


