import type { Base } from "@/services/types"

export interface ProductCharacteristic extends Base {
  name: string
  characteristicName: string
  value: string
}
