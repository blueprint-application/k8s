# IoK8sApiFlowcontrolV1beta3NonResourcePolicyRuleModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nonResourceURLs** | **Array&lt;string&gt;** | &#x60;nonResourceURLs&#x60; is a set of url prefixes that a user should have access to and may not be empty. For example:   - \&quot;/healthz\&quot; is legal   - \&quot;/hea*\&quot; is illegal   - \&quot;/hea\&quot; is legal but matches nothing   - \&quot;/hea/_*\&quot; also matches nothing   - \&quot;/healthz/_*\&quot; matches all per-component health checks. \&quot;*\&quot; matches all non-resource urls. if it is present, it must be the only entry. Required. | [default to undefined]
**verbs** | **Array&lt;string&gt;** | &#x60;verbs&#x60; is a list of matching verbs and may not be empty. \&quot;*\&quot; matches all verbs. If it is present, it must be the only entry. Required. | [default to undefined]


