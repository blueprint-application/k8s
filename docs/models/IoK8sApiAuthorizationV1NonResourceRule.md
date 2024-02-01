# IoK8sApiAuthorizationV1NonResourceRuleModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nonResourceURLs** | **Array&lt;string&gt;** | NonResourceURLs is a set of partial urls that a user should have access to.  *s are allowed, but only as the full, final step in the path.  \&quot;*\&quot; means all. | [optional] [default to undefined]
**verbs** | **Array&lt;string&gt;** | Verb is a list of kubernetes non-resource API verbs, like: get, post, put, delete, patch, head, options.  \&quot;*\&quot; means all. | [default to undefined]


