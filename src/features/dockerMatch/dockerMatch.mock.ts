import { DockerImage } from './dockerMatch.types'

export const DOCKER_BUILDS = ['7.13.0-1347', '7.12.0-792']
export const DOCKER_HOSTS = ['smci350-rck-04', 'ctr-navi4x-am48-ws06']

export const MOCK_DOCKER_IMAGES: DockerImage[] = [
  { framework: 'PyTorch', tag: 'rocm/pytorch:6.1.3-abcdef12' },
  { framework: 'VLLM', tag: 'rocm/pytorch-vllm:6.1.3-abcdef12' },
  { framework: 'JAX', tag: 'rocm/jax:6.1.3-abcdef12' },
  { framework: 'TensorFlow', tag: 'rocm/tf-manylinux:6.1.3-abcdef12' },
  { framework: 'SGLang', tag: 'rocm/sglang:6.1.3-abcdef12' },
]
