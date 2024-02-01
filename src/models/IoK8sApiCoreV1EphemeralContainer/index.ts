import { IoK8sApiCoreV1ContainerPortModelOptions as IoK8sApiCoreV1ContainerPort } from '../IoK8sApiCoreV1ContainerPort';
import { IoK8sApiCoreV1ContainerResizePolicyModelOptions as IoK8sApiCoreV1ContainerResizePolicy } from '../IoK8sApiCoreV1ContainerResizePolicy';
import { IoK8sApiCoreV1EnvFromSourceModelOptions as IoK8sApiCoreV1EnvFromSource } from '../IoK8sApiCoreV1EnvFromSource';
import { IoK8sApiCoreV1EnvVarModelOptions as IoK8sApiCoreV1EnvVar } from '../IoK8sApiCoreV1EnvVar';
import { IoK8sApiCoreV1LifecycleModelOptions as IoK8sApiCoreV1Lifecycle } from '../IoK8sApiCoreV1Lifecycle';
import { IoK8sApiCoreV1ProbeModelOptions as IoK8sApiCoreV1Probe } from '../IoK8sApiCoreV1Probe';
import { IoK8sApiCoreV1ResourceRequirementsModelOptions as IoK8sApiCoreV1ResourceRequirements } from '../IoK8sApiCoreV1ResourceRequirements';
import { IoK8sApiCoreV1SecurityContextModelOptions as IoK8sApiCoreV1SecurityContext } from '../IoK8sApiCoreV1SecurityContext';
import { IoK8sApiCoreV1VolumeDeviceModelOptions as IoK8sApiCoreV1VolumeDevice } from '../IoK8sApiCoreV1VolumeDevice';
import { IoK8sApiCoreV1VolumeMountModelOptions as IoK8sApiCoreV1VolumeMount } from '../IoK8sApiCoreV1VolumeMount';
import { BaseModel } from '../types';
import type { IoK8sApiCoreV1EphemeralContainerModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1EphemeralContainerModel extends BaseModel {
  // Arguments to the entrypoint. The image\'s CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container\'s environment. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. \"$$(VAR_NAME)\" will produce the string literal \"$(VAR_NAME)\". Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell
  args?: Array<string>;
  // Entrypoint array. Not executed within a shell. The image\'s ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container\'s environment. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. \"$$(VAR_NAME)\" will produce the string literal \"$(VAR_NAME)\". Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell
  command?: Array<string>;
  // List of environment variables to set in the container. Cannot be updated.
  env?: Array<IoK8sApiCoreV1EnvVar>;
  // List of sources to populate environment variables in the container. The keys defined within a source must be a C_IDENTIFIER. All invalid keys will be reported as an event when the container is starting. When a key exists in multiple sources, the value associated with the last source will take precedence. Values defined by an Env with a duplicate key will take precedence. Cannot be updated.
  envFrom?: Array<IoK8sApiCoreV1EnvFromSource>;
  // Container image name. More info: https://kubernetes.io/docs/concepts/containers/images
  image?: string;
  // Image pull policy. One of Always, Never, IfNotPresent. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise. Cannot be updated. More info: https://kubernetes.io/docs/concepts/containers/images#updating-images
  imagePullPolicy?: string;
  lifecycle?: IoK8sApiCoreV1Lifecycle;
  livenessProbe?: IoK8sApiCoreV1Probe;
  // Name of the ephemeral container specified as a DNS_LABEL. This name must be unique among all containers, init containers and ephemeral containers.
  name: string;
  // Ports are not allowed for ephemeral containers.
  ports?: Array<IoK8sApiCoreV1ContainerPort>;
  readinessProbe?: IoK8sApiCoreV1Probe;
  // Resources resize policy for the container.
  resizePolicy?: Array<IoK8sApiCoreV1ContainerResizePolicy>;
  resources?: IoK8sApiCoreV1ResourceRequirements;
  // Restart policy for the container to manage the restart behavior of each container within a pod. This may only be set for init containers. You cannot set this field on ephemeral containers.
  restartPolicy?: string;
  securityContext?: IoK8sApiCoreV1SecurityContext;
  startupProbe?: IoK8sApiCoreV1Probe;
  // Whether this container should allocate a buffer for stdin in the container runtime. If this is not set, reads from stdin in the container will always result in EOF. Default is false.
  stdin?: boolean;
  // Whether the container runtime should close the stdin channel after it has been opened by a single attach. When stdin is true the stdin stream will remain open across multiple attach sessions. If stdinOnce is set to true, stdin is opened on container start, is empty until the first client attaches to stdin, and then remains open and accepts data until the client disconnects, at which time stdin is closed and remains closed until the container is restarted. If this flag is false, a container processes that reads from stdin will never receive an EOF. Default is false
  stdinOnce?: boolean;
  // If set, the name of the container from PodSpec that this ephemeral container targets. The ephemeral container will be run in the namespaces (IPC, PID, etc) of this container. If not set then the ephemeral container uses the namespaces configured in the Pod spec.  The container runtime must implement support for this feature. If the runtime does not support namespace targeting then the result of setting this field is undefined.
  targetContainerName?: string;
  // Optional: Path at which the file to which the container\'s termination message will be written is mounted into the container\'s filesystem. Message written is intended to be brief final status, such as an assertion failure message. Will be truncated by the node if greater than 4096 bytes. The total message length across all containers will be limited to 12kb. Defaults to /dev/termination-log. Cannot be updated.
  terminationMessagePath?: string;
  // Indicate how the termination message should be populated. File will use the contents of terminationMessagePath to populate the container status message on both success and failure. FallbackToLogsOnError will use the last chunk of container log output if the termination message file is empty and the container exited with an error. The log output is limited to 2048 bytes or 80 lines, whichever is smaller. Defaults to File. Cannot be updated.
  terminationMessagePolicy?: string;
  // Whether this container should allocate a TTY for itself, also requires \'stdin\' to be true. Default is false.
  tty?: boolean;
  // volumeDevices is the list of block devices to be used by the container.
  volumeDevices?: Array<IoK8sApiCoreV1VolumeDevice>;
  // Pod volumes to mount into the container\'s filesystem. Subpath mounts are not allowed for ephemeral containers. Cannot be updated.
  volumeMounts?: Array<IoK8sApiCoreV1VolumeMount>;
  // Container\'s working directory. If not specified, the container runtime\'s default will be used, which might be configured in the container image. Cannot be updated.
  workingDir?: string;

  constructor(data: IoK8sApiCoreV1EphemeralContainerModelOptions) {
    super();
    validate(data);
    this.args = data.args;
    this.command = data.command;
    this.env = data.env;
    this.envFrom = data.envFrom;
    this.image = data.image;
    this.imagePullPolicy = data.imagePullPolicy;
    this.lifecycle = data.lifecycle;
    this.livenessProbe = data.livenessProbe;
    this.name = data.name;
    this.ports = data.ports;
    this.readinessProbe = data.readinessProbe;
    this.resizePolicy = data.resizePolicy;
    this.resources = data.resources;
    this.restartPolicy = data.restartPolicy;
    this.securityContext = data.securityContext;
    this.startupProbe = data.startupProbe;
    this.stdin = data.stdin;
    this.stdinOnce = data.stdinOnce;
    this.targetContainerName = data.targetContainerName;
    this.terminationMessagePath = data.terminationMessagePath;
    this.terminationMessagePolicy = data.terminationMessagePolicy;
    this.tty = data.tty;
    this.volumeDevices = data.volumeDevices;
    this.volumeMounts = data.volumeMounts;
    this.workingDir = data.workingDir;
  }

  static create(data: IoK8sApiCoreV1EphemeralContainerModelOptions): IoK8sApiCoreV1EphemeralContainerModel {
    return new IoK8sApiCoreV1EphemeralContainerModel(data);
  }

  toObject(): Partial<this> {
    return {
      args: this.args,
      command: this.command,
      env: this.env,
      envFrom: this.envFrom,
      image: this.image,
      imagePullPolicy: this.imagePullPolicy,
      lifecycle: this.lifecycle,
      livenessProbe: this.livenessProbe,
      name: this.name,
      ports: this.ports,
      readinessProbe: this.readinessProbe,
      resizePolicy: this.resizePolicy,
      resources: this.resources,
      restartPolicy: this.restartPolicy,
      securityContext: this.securityContext,
      startupProbe: this.startupProbe,
      stdin: this.stdin,
      stdinOnce: this.stdinOnce,
      targetContainerName: this.targetContainerName,
      terminationMessagePath: this.terminationMessagePath,
      terminationMessagePolicy: this.terminationMessagePolicy,
      tty: this.tty,
      volumeDevices: this.volumeDevices,
      volumeMounts: this.volumeMounts,
      workingDir: this.workingDir,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1EphemeralContainerModel;
