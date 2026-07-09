import { createLucideIcon } from 'lucide-react'

export const KitchenSink = createLucideIcon('KitchenSink', [
  ['path', { d: 'M4 11h16', key: 'counter' }],
  ['path', { d: 'M6 11v7a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-7', key: 'basin' }],
  ['path', { d: 'M12 4v4', key: 'faucet-stem' }],
  ['path', { d: 'M9 8h6', key: 'faucet-spout' }],
  ['circle', { cx: '12', cy: '16', r: '1', key: 'drain' }],
])
