# IoK8sApiAuthorizationV1SubjectRulesReviewStatusModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**evaluationError** | **string** | EvaluationError can appear in combination with Rules. It indicates an error occurred during rule evaluation, such as an authorizer that doesn\&#39;t support rule evaluation, and that ResourceRules and/or NonResourceRules may be incomplete. | [optional] [default to undefined]
**incomplete** | **boolean** | Incomplete is true when the rules returned by this call are incomplete. This is most commonly encountered when an authorizer, such as an external authorizer, doesn\&#39;t support rules evaluation. | [default to undefined]
**nonResourceRules** | [**Array&lt;IoK8sApiAuthorizationV1NonResourceRule&gt;**](IoK8sApiAuthorizationV1NonResourceRule.md) | NonResourceRules is the list of actions the subject is allowed to perform on non-resources. The list ordering isn\&#39;t significant, may contain duplicates, and possibly be incomplete. | [default to undefined]
**resourceRules** | [**Array&lt;IoK8sApiAuthorizationV1ResourceRule&gt;**](IoK8sApiAuthorizationV1ResourceRule.md) | ResourceRules is the list of actions the subject is allowed to perform on resources. The list ordering isn\&#39;t significant, may contain duplicates, and possibly be incomplete. | [default to undefined]


