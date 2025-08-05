import { Button } from '@/components/ui/button'
import { Loader2Icon } from 'lucide-react'
import React from 'react'

function page() {
  return (
    <>
    <Button size="sm" disabled>
      <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />
      Loading...
    </Button>
    </>
  )
}

export default page