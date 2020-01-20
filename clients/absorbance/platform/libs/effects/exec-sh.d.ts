declare module 'exec-sh' {
  interface IExecSh {
    (command: string, options?: object | true): void
    promise: (command: string, options?: object | true) => Promise<any>
  }

  const execSh: IExecSh

  export = execSh
}
