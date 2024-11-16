import { MagnifyingGlass } from '@phosphor-icons/react'
import { ChatCircle, HandCoins } from '@phosphor-icons/react'
import type { MetaFunction } from '@remix-run/cloudflare'
import { useAtomValue } from 'jotai'
import { loaderDataAtom } from '~/atoms'
import Avatar from '~/components/Avatar'
import BottomBar from '~/components/BottomBar'
import TopBar from '~/components/TopBar'

export const meta: MetaFunction = () => {
  const ld = useAtomValue(loaderDataAtom)
  return [{ title: `Members | ${ld?.appConfig?.name ?? 'KON'}` }]
}

const DummyList = [
  { id: 'john', pt: 100 },
  { id: 'alice', pt: 10 },
  { id: 'yoda', pt: 9 }
]

export default function Members() {
  return (
    <div className="wrapper-app">
      <TopBar backUrl="/home">Members</TopBar>
      <div className="relative">
        <input type="search" className="mb-8 w-full rounded-full pr-4 pl-14" />
        <MagnifyingGlass size={28} className="absolute top-2.5 left-4" />
      </div>
      <UserLists />
      <BottomBar />
    </div>
  )
}

const UserLists = () => (
  <div className="-mx-6">
    <ul className="w-full border-muted border-b">
      {DummyList.map((user) => (
        <li
          key={user.id}
          className="flex items-center justify-between overflow-hidden border-muted border-t px-6 py-4"
        >
          <div className="flex items-center overflow-hidden">
            <Avatar name={user.id} size={48} />
            <div>
              <p className="px-4 font-bold text-xl">{user.id}</p>
              <p className="px-4 font-mono text-sm">
                {user.pt}
                <span className="px-0.5">pts</span>
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-3 overflow-hidden">
            <button type="button">
              <HandCoins size={28} />
            </button>
            <button type="button">
              <ChatCircle size={28} />
            </button>
          </div>
        </li>
      ))}
    </ul>
  </div>
)