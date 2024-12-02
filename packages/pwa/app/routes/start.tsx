import type { MetaFunction } from '@remix-run/cloudflare'
import { useRouteLoaderData } from '@remix-run/react'
import StartForm from '~/components/StartForm'
import TopBar from '~/components/TopBar'
import IconKon from '~/components/icon/kon'
import type { RootLoader } from '~/root'

export const meta: MetaFunction = ({ matches }) => {
  const ld = matches[0]?.data as RootLoaderData
  return [{ title: `Start | ${ld?.appConfig?.name ?? ''}` }]
}

export default function Start() {
  const ld = useRouteLoaderData<RootLoader>('root')

  return (
    <div className="wrapper-app">
      <TopBar>
        <div className="flex w-full justify-center">{ld?.appConfig?.name}</div>
      </TopBar>
      <div className="flex items-center justify-center">
        {ld?.appConfig?.icons?.logo ? (
          <img
            src={ld?.appConfig?.icons?.logo}
            className="mb-8 max-h-48 max-w-48 rounded-full"
            alt={ld?.appConfig?.name ?? ''}
          />
        ) : (
          <IconKon size={198} className="mb-8" />
        )}
      </div>
      <StartForm />
    </div>
  )
}
