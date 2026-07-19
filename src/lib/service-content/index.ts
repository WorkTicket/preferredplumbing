import type { RichServiceContent } from '@/types'
import { specialtyServiceContent } from './specialty'
import { residentialServiceContent } from './residential'
import { undergroundServiceContent } from './underground'

export const serviceContent: Record<string, RichServiceContent> = {
  ...specialtyServiceContent,
  ...residentialServiceContent,
  ...undergroundServiceContent,
}

export { pageMeta } from './page-meta'
