import { DockerImage } from './dockerMatch.types'

export const MOCK_DOCKER_IMAGES: DockerImage[] = [
  { framework: 'PyTorch',        tag: 'rocm/pytorch:6.1.3-abcdef12' },
  { framework: 'VLLM',           tag: 'rocm/pytorch-vllm:6.1.3-abcdef12' },
  { framework: 'JAX',            tag: 'rocm/jax:6.1.3-abcdef12' },
  { framework: 'TensorFlow',     tag: 'rocm/tf-manylinux:6.1.3-abcdef12' },
  { framework: 'SGLang',         tag: 'rocm/sglang:6.1.3-abcdef12' },
]

