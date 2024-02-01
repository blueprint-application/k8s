# IoK8sApiNetworkingV1NetworkPolicyPortModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**endPort** | **number** | endPort indicates that the range of ports from port to endPort if set, inclusive, should be allowed by the policy. This field cannot be defined if the port field is not defined or if the port field is defined as a named (string) port. The endPort must be equal or greater than port. | [optional] [default to undefined]
**port** | **string** | IntOrString is a type that can hold an int32 or a string.  When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type.  This allows you to have, for example, a JSON field that can accept a name or number. | [optional] [default to undefined]
**protocol** | **string** | protocol represents the protocol (TCP, UDP, or SCTP) which traffic must match. If not specified, this field defaults to TCP. | [optional] [default to undefined]


