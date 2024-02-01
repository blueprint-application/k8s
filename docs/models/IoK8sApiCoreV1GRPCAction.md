# IoK8sApiCoreV1GRPCActionModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**port** | **number** | Port number of the gRPC service. Number must be in the range 1 to 65535. | [default to undefined]
**service** | **string** | Service is the name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md).  If this is not specified, the default behavior is defined by gRPC. | [optional] [default to undefined]


