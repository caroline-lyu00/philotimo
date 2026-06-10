export const TRIGGER_HOSTS = ['v710-2vf-vm1', 'smci350-rck-04', 'smci350-rck-07']
export const TRIGGER_BUILDS = ['7.14.0-20260604', '7.14.0-20260601']

export const DISPATCH_PREVIEW = [
  {
    num: 1,
    testname: '(testname)',
    workflow: '(workflow.yml)',
    shape: '(shape)',
    dockerFamily: '(docker family)',
    inputsPreview: '(inputs preview)',
  },
]

export const DOCKER_IMAGE_FIELDS = [
  'PyTorch docker',
  'JAX docker',
  'VLLM-base docker',
  'SGLang docker',
]
