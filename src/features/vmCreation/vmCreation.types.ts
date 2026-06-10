export type Hypervisor = 'KVM' | 'Hyper-V'

export type VmProfile = '1VF Navi32' | '2VF Navi32' | 'BigVM (2 GPU passthrough)'

export interface VmCreationParams {
  hypervisor: Hypervisor
  host: string
  sshUsername: string
  privateKeyPath: string
  usePassword: boolean
  sshPassword: string
  vmProfile: VmProfile
  vmName: string
}

export interface VmCreationResult {
  tool: string
  vmIp: string
  gpuAttach: string
}
