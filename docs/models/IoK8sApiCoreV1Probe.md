# IoK8sApiCoreV1ProbeModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exec** | [**IoK8sApiCoreV1ExecAction**](IoK8sApiCoreV1ExecAction.md) |  | [optional] [default to undefined]
**failureThreshold** | **number** | Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1. | [optional] [default to undefined]
**grpc** | [**IoK8sApiCoreV1GRPCAction**](IoK8sApiCoreV1GRPCAction.md) |  | [optional] [default to undefined]
**httpGet** | [**IoK8sApiCoreV1HTTPGetAction**](IoK8sApiCoreV1HTTPGetAction.md) |  | [optional] [default to undefined]
**initialDelaySeconds** | **number** | Number of seconds after the container has started before liveness probes are initiated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes | [optional] [default to undefined]
**periodSeconds** | **number** | How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1. | [optional] [default to undefined]
**successThreshold** | **number** | Minimum consecutive successes for the probe to be considered successful after having failed. Defaults to 1. Must be 1 for liveness and startup. Minimum value is 1. | [optional] [default to undefined]
**tcpSocket** | [**IoK8sApiCoreV1TCPSocketAction**](IoK8sApiCoreV1TCPSocketAction.md) |  | [optional] [default to undefined]
**terminationGracePeriodSeconds** | **number** | Optional duration in seconds the pod needs to terminate gracefully upon probe failure. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. If this value is nil, the pod\&#39;s terminationGracePeriodSeconds will be used. Otherwise, this value overrides the value provided by the pod spec. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). This is a beta field and requires enabling ProbeTerminationGracePeriod feature gate. Minimum value is 1. spec.terminationGracePeriodSeconds is used if unset. | [optional] [default to undefined]
**timeoutSeconds** | **number** | Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes | [optional] [default to undefined]


