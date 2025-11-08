import type { GetCompUnitless } from '@antdv-next/cssinjs'
import type { AliasToken, ComponentTokenMap, SeedToken } from '../interface'
import { genStyleUtils } from '@antdv-next/cssinjs/cssinjs-utils'
import { computed } from 'vue'
import { defaultIconPrefixCls, useConfig } from '../../config-provider/context'
import { genCommonStyle, genIconStyle, genLinkStyle } from '../../style'
import useLocalToken, { unitless } from '../useToken.ts'

export const { genComponentStyleHook, genStyleHooks, genSubStyleComponent } = genStyleUtils<
  ComponentTokenMap,
  AliasToken,
  SeedToken
>({
  usePrefix: () => {
    const configCtx = useConfig()
    return computed(() => {
      const { getPrefixCls, iconPrefixCls } = configCtx.value
      const rootPrefixCls = getPrefixCls()
      return {
        rootPrefixCls,
        iconPrefixCls,
      }
    })
  },
  useToken() {
    const [theme, realToken, hashId, token, cssVar] = useLocalToken()
    return {
      theme,
      realToken,
      hashId: computed(() => hashId.value ?? ''),
      token,
      cssVar: computed(() => cssVar?.value ?? {
        prefix: '',
        key: '',
      }),
    }
  },
  useCSP: () => {
    const configCtx = useConfig()
    return computed(() => configCtx.value?.csp ?? {})
  },
  getResetStyles: (token, config) => {
    const linkStyle = genLinkStyle(token)
    const { prefix } = config ?? {}
    return [
      linkStyle,
      { '&': linkStyle },
      genIconStyle(prefix?.value?.iconPrefixCls ?? defaultIconPrefixCls),
    ]
  },
  getCommonStyle: genCommonStyle,
  getCompUnitless: (() => unitless) as GetCompUnitless<ComponentTokenMap, AliasToken>,
})

export function genCssVar(antCls: string, componentAbbr: string) {
  const cssPrefix = `--${antCls.replace('.', '')}-${componentAbbr}-`

  return (name: string, withVar = false) => {
    const raw = `${cssPrefix}${name}`
    return withVar ? `var(${raw})` : raw
  }
}
