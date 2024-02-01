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

export interface IoK8sApiCoreV1EphemeralContainerModelOptions {
  args?: Array<string>;
  command?: Array<string>;
  env?: Array<IoK8sApiCoreV1EnvVar>;
  envFrom?: Array<IoK8sApiCoreV1EnvFromSource>;
  image?: string;
  imagePullPolicy?: string;
  lifecycle?: IoK8sApiCoreV1Lifecycle;
  livenessProbe?: IoK8sApiCoreV1Probe;
  name: string;
  ports?: Array<IoK8sApiCoreV1ContainerPort>;
  readinessProbe?: IoK8sApiCoreV1Probe;
  resizePolicy?: Array<IoK8sApiCoreV1ContainerResizePolicy>;
  resources?: IoK8sApiCoreV1ResourceRequirements;
  restartPolicy?: string;
  securityContext?: IoK8sApiCoreV1SecurityContext;
  startupProbe?: IoK8sApiCoreV1Probe;
  stdin?: boolean;
  stdinOnce?: boolean;
  targetContainerName?: string;
  terminationMessagePath?: string;
  terminationMessagePolicy?: string;
  tty?: boolean;
  volumeDevices?: Array<IoK8sApiCoreV1VolumeDevice>;
  volumeMounts?: Array<IoK8sApiCoreV1VolumeMount>;
  workingDir?: string;
}
