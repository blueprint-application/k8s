# IoK8sApiFlowcontrolV1beta3ResourcePolicyRuleModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apiGroups** | **Array&lt;string&gt;** | &#x60;apiGroups&#x60; is a list of matching API groups and may not be empty. \&quot;*\&quot; matches all API groups and, if present, must be the only entry. Required. | [default to undefined]
**clusterScope** | **boolean** | &#x60;clusterScope&#x60; indicates whether to match requests that do not specify a namespace (which happens either because the resource is not namespaced or the request targets all namespaces). If this field is omitted or false then the &#x60;namespaces&#x60; field must contain a non-empty list. | [optional] [default to undefined]
**namespaces** | **Array&lt;string&gt;** | &#x60;namespaces&#x60; is a list of target namespaces that restricts matches.  A request that specifies a target namespace matches only if either (a) this list contains that target namespace or (b) this list contains \&quot;*\&quot;.  Note that \&quot;*\&quot; matches any specified namespace but does not match a request that _does not specify_ a namespace (see the &#x60;clusterScope&#x60; field for that). This list may be empty, but only if &#x60;clusterScope&#x60; is true. | [optional] [default to undefined]
**resources** | **Array&lt;string&gt;** | &#x60;resources&#x60; is a list of matching resources (i.e., lowercase and plural) with, if desired, subresource.  For example, [ \&quot;services\&quot;, \&quot;nodes/status\&quot; ].  This list may not be empty. \&quot;*\&quot; matches all resources and, if present, must be the only entry. Required. | [default to undefined]
**verbs** | **Array&lt;string&gt;** | &#x60;verbs&#x60; is a list of matching verbs and may not be empty. \&quot;*\&quot; matches all verbs and, if present, must be the only entry. Required. | [default to undefined]


