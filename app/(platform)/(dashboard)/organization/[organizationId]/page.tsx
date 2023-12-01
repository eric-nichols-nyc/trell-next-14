import React from 'react'
import {OrganizationSwitcher, auth} from '@clerk/nextjs'
import { Info } from './_components/info'
import { BoardList } from './_components/board-list'

const OrganiztionIdPage = () => {
  const {userId, orgId} = auth()
  return (
    <div className="w-full mb-20">
      <Info isPro={false} />
      <BoardList />
    </div>
  )
}

export default OrganiztionIdPage