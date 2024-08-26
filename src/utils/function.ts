import { ROUTES } from '@/constants/routes'

export const pushParamsToUrl = (params: Record<string, any>) => {
  const searchParams = new URLSearchParams(window.location.search)
  Object.entries(params).forEach(([key, value]) => {
    searchParams.set(key, value)
  })
  const newUrl = `${ROUTES.SEARCH}?${searchParams.toString()}`
  window.location.replace(newUrl)
}

export const getToday = () => {
  return new Date().toISOString().split('T')[0]
}

export const getYesterday = () => {
  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)
  return yesterday.toISOString().split('T')[0]
}

export const getLastWeek = () => {
  const lastWeek = new Date()
  lastWeek.setDate(lastWeek.getDate() - 7)
  return lastWeek.toISOString().split('T')[0]
}

export const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))
