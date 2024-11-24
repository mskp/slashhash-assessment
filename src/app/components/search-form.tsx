'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { FormEvent } from 'react'

export default function SearchForm() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const query = formData.get('query')
    router.push(`/?query=${query}`)
  }

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="input-group">
        <input
          type="text"
          name="query"
          className="form-control"
          placeholder="Search universities..."
          defaultValue={searchParams.get('query') ?? ''}
        />
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </div>
    </form>
  )
}

