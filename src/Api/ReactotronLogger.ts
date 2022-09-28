/**
 * @Author: Rostislav Simonik <rostislav.simonik>
 * @Date:   2017-12-27T11:05:06+01:00
 * @Email:  rostislav.simonik@technologystudio.sk
 * @Copyright: Technology Studio
**/

import {
  type Options,
  type Level,
  type WriteLog,
  configManager,
} from '@txo-peer-dep/log'

export const LOGGER_KEY = 'reactotron'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const writeLog: WriteLog = (level: Level, name: string, namespace: string, message: string, payload?: any, options?: Options) => {
  // TODO: differentiate level by console.tron.send
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (console as any).tron && (console as any).tron.display({
    name: message,
    preview: name,
    value: {
      preview: name,
      value: configManager.config.payloadProcessor(payload),
    },
    important: options?.important,
  })
}
