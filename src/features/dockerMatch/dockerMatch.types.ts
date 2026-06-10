export interface DockerMatchQuery {
    build: string
    host: string
    framework?: 'PyTorch' | 'JAX' | 'TensorFlow' | 'VLLM' | 'SGLang'  // optional

}

export interface DockerImage {
    framework: string
    tag:string
}