# IoK8sApiFlowcontrolV1beta3PolicyRulesWithSubjectsModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nonResourceRules** | [**Array&lt;IoK8sApiFlowcontrolV1beta3NonResourcePolicyRule&gt;**](IoK8sApiFlowcontrolV1beta3NonResourcePolicyRule.md) | &#x60;nonResourceRules&#x60; is a list of NonResourcePolicyRules that identify matching requests according to their verb and the target non-resource URL. | [optional] [default to undefined]
**resourceRules** | [**Array&lt;IoK8sApiFlowcontrolV1beta3ResourcePolicyRule&gt;**](IoK8sApiFlowcontrolV1beta3ResourcePolicyRule.md) | &#x60;resourceRules&#x60; is a slice of ResourcePolicyRules that identify matching requests according to their verb and the target resource. At least one of &#x60;resourceRules&#x60; and &#x60;nonResourceRules&#x60; has to be non-empty. | [optional] [default to undefined]
**subjects** | [**Array&lt;IoK8sApiFlowcontrolV1beta3Subject&gt;**](IoK8sApiFlowcontrolV1beta3Subject.md) | subjects is the list of normal user, serviceaccount, or group that this rule cares about. There must be at least one member in this slice. A slice that includes both the system:authenticated and system:unauthenticated user groups matches every request. Required. | [default to undefined]


