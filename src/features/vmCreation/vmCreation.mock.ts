export const VM_PROFILES = ['1VF Navi32', '2VF Navi32', 'BigVM (2 GPU passthrough)']

export const VM_ARTIFACTS = [
  { label: 'Tool', value: 'create_kvm_vm_over_ssh' },
  { label: 'VM IP', value: '(from get_kvm_vm_ip_over_ssh)' },
  { label: 'GPU attach', value: '(attach_kvm_amd_gpu_over_ssh status)' },
]

export const VM_TERMINAL_PLACEHOLDER =
  'Agent reads form inputs and invokes ssh-connect + VM MCP tools. Profiles: 1VF / 2VF / BigVM per GeneralGuidelines.md.'
