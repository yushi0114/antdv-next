import type { VNodeChild } from 'vue'

export type AnyObject = Record<PropertyKey, any>

export type RenderNodeFn<Args extends any[] = any[]> = (...args: Args) => VNodeChild
