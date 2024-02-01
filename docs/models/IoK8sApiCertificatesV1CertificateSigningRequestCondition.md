# IoK8sApiCertificatesV1CertificateSigningRequestConditionModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lastTransitionTime** | **Date** | Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers. | [optional] [default to undefined]
**lastUpdateTime** | **Date** | Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers. | [optional] [default to undefined]
**message** | **string** | message contains a human readable message with details about the request state | [optional] [default to undefined]
**reason** | **string** | reason indicates a brief reason for the request state | [optional] [default to undefined]
**status** | **string** | status of the condition, one of True, False, Unknown. Approved, Denied, and Failed conditions may not be \&quot;False\&quot; or \&quot;Unknown\&quot;. | [default to undefined]
**type** | **string** | type of the condition. Known conditions are \&quot;Approved\&quot;, \&quot;Denied\&quot;, and \&quot;Failed\&quot;.  An \&quot;Approved\&quot; condition is added via the /approval subresource, indicating the request was approved and should be issued by the signer.  A \&quot;Denied\&quot; condition is added via the /approval subresource, indicating the request was denied and should not be issued by the signer.  A \&quot;Failed\&quot; condition is added via the /status subresource, indicating the signer failed to issue the certificate.  Approved and Denied conditions are mutually exclusive. Approved, Denied, and Failed conditions cannot be removed once added.  Only one condition of a given type is allowed. | [default to undefined]


