import { PlusCircle } from '@phosphor-icons/react'
import type { MetaFunction } from '@remix-run/cloudflare'
import BottomBar from '~/components/BottomBar'
import TopBar from '~/components/TopBar'
import type { LoaderData } from '~/types'

export const meta: MetaFunction = ({ matches }) => {
  const ld = matches[0]?.data as LoaderData
  return [{ title: `Forum | ${ld?.appConfig?.name ?? ''}` }]
}

export default function Forum() {
  return (
    <div className="wrapper-app">
      <TopBar backUrl="/home">
        <div className="flex w-full items-center justify-between">
          <span>Forum</span>
          <button type="button">
            <PlusCircle size={38} weight="duotone" />
          </button>
        </div>
      </TopBar>
      <BottomBar />
    </div>
  )
}
