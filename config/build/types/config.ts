export type BuildMode = "development" | "production";

export interface BuildPath {
  entry: string
  build: string
  html: string
  src: string
}

export interface BuildENV {
  mode: BuildMode
  port: number
}

export interface BuildOptions {
  mode: BuildMode
  paths: BuildPath
  isDev: boolean
  port: number
}
