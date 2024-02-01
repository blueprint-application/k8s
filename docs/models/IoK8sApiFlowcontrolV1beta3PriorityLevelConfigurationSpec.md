# IoK8sApiFlowcontrolV1beta3PriorityLevelConfigurationSpecModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exempt** | [**IoK8sApiFlowcontrolV1beta3ExemptPriorityLevelConfiguration**](IoK8sApiFlowcontrolV1beta3ExemptPriorityLevelConfiguration.md) |  | [optional] [default to undefined]
**limited** | [**IoK8sApiFlowcontrolV1beta3LimitedPriorityLevelConfiguration**](IoK8sApiFlowcontrolV1beta3LimitedPriorityLevelConfiguration.md) |  | [optional] [default to undefined]
**type** | **string** | &#x60;type&#x60; indicates whether this priority level is subject to limitation on request execution.  A value of &#x60;\&quot;Exempt\&quot;&#x60; means that requests of this priority level are not subject to a limit (and thus are never queued) and do not detract from the capacity made available to other priority levels.  A value of &#x60;\&quot;Limited\&quot;&#x60; means that (a) requests of this priority level _are_ subject to limits and (b) some of the server\&#39;s limited capacity is made available exclusively to this priority level. Required. | [default to undefined]


