const getConfig = (): Record<string,string>=>{
    //@ts-ignore
    const env = window._env_
    if(!env){
        throw new Error(`window._env_ is not defined, please set environment variables or specify the config manually in public/config.js`)
    }
    return env
}

export const getConfigValue =(key: string): string=>{
    const value = getConfig()['APP_'+key]
    if(!value){
        throw new Error(`window._env_.${key} is not defined, please set environment variables or specify the config manually in public/config.js`)
    }
    return value
}
