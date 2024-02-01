# IoK8sApiAuthenticationV1TokenReviewSpecModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audiences** | **Array&lt;string&gt;** | Audiences is a list of the identifiers that the resource server presented with the token identifies as. Audience-aware token authenticators will verify that the token was intended for at least one of the audiences in this list. If no audiences are provided, the audience will default to the audience of the Kubernetes apiserver. | [optional] [default to undefined]
**token** | **string** | Token is the opaque bearer token. | [optional] [default to undefined]


