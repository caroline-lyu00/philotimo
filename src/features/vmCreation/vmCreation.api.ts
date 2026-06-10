import { VmCreationParams, VmCreationResult } from './vmCreation.types'
import { MOCK_VM_RESULT } from './vmCreation.mock'

export async function createVm(_params: VmCreationParams): Promise<VmCreationResult> {
  await new Promise((r) => setTimeout(r, 1800))
  return MOCK_VM_RESULT
}
