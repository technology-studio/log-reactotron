declare module "@txo/log-reactotron" {
    import { WriteLog } from '@txo-peer-dep/log';
    declare var LOGGER_KEY: string;
    declare var writeLog: WriteLog;
}
