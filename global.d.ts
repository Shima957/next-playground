import type { SetupWorkerApi } from 'msw'

declare global {
  interface Window {
    msw: { woker: SetupWorkerApi }
  }
}
