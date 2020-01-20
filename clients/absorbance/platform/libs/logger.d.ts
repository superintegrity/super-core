export interface ILogger {
  debug: (message?: any, ...optionalParams: any[]) => any
  info: (message?: any, ...optionalParams: any[]) => any
  warn: (message?: any, ...optionalParams: any[]) => any
  error: (message?: any, ...optionalParams: any[]) => any
}
