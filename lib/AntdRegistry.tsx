'use client'

import React from 'react'
import { StyleProvider, createCache, extractStyle } from '@ant-design/cssinjs'
import { useServerInsertedHTML } from 'next/navigation'
import Entity from '@ant-design/cssinjs/lib/Cache'

const StyledComponentsRegistry = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const cache = React.useMemo<Entity>(() => createCache(), [createCache])
  useServerInsertedHTML(() => (
    <style
      id="antd"
      dangerouslySetInnerHTML={{ __html: extractStyle(cache, true) }}
    />
  ))
  return <StyleProvider cache={cache}>{children}</StyleProvider>
}

export default StyledComponentsRegistry
