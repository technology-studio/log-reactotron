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

type ConsoleWithTron = Console & {
  tron: {
    display: (data: Record<string, unknown>) => void,
  },
}

export const writeLog: WriteLog = (level: Level, name: string, namespace: string, message: string, payload?: unknown, options?: Options) => {
  // TODO: differentiate level by console.tron.send
  (Boolean((console as ConsoleWithTron).tron)) && (console as ConsoleWithTron).tron.display({
    name: message,
    preview: name,
    value: {
      preview: name,
      value: configManager.config.payloadProcessor(payload),
    },
    important: options?.important,
  })
}
