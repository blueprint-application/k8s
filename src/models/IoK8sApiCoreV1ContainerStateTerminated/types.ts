export interface IoK8sApiCoreV1ContainerStateTerminatedModelOptions {
  containerID?: string;
  exitCode: number;
  finishedAt?: Date;
  message?: string;
  reason?: string;
  signal?: number;
  startedAt?: Date;
}
