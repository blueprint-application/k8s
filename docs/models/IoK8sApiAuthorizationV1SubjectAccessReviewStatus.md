# IoK8sApiAuthorizationV1SubjectAccessReviewStatusModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed** | **boolean** | Allowed is required. True if the action would be allowed, false otherwise. | [default to undefined]
**denied** | **boolean** | Denied is optional. True if the action would be denied, otherwise false. If both allowed is false and denied is false, then the authorizer has no opinion on whether to authorize the action. Denied may not be true if Allowed is true. | [optional] [default to undefined]
**evaluationError** | **string** | EvaluationError is an indication that some error occurred during the authorization check. It is entirely possible to get an error and be able to continue determine authorization status in spite of it. For instance, RBAC can be missing a role, but enough roles are still present and bound to reason about the request. | [optional] [default to undefined]
**reason** | **string** | Reason is optional.  It indicates why a request was allowed or denied. | [optional] [default to undefined]


