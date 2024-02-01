# IoK8sApiAdmissionregistrationV1beta1VariableModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expression** | **string** | Expression is the expression that will be evaluated as the value of the variable. The CEL expression has access to the same identifiers as the CEL expressions in Validation. | [default to undefined]
**name** | **string** | Name is the name of the variable. The name must be a valid CEL identifier and unique among all variables. The variable can be accessed in other expressions through &#x60;variables&#x60; For example, if name is \&quot;foo\&quot;, the variable will be available as &#x60;variables.foo&#x60; | [default to undefined]


