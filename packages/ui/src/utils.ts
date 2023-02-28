import { TIMEZONE } from '@/constants'
import { format, formatDistanceToNowStrict } from 'date-fns'
import { utcToZonedTime } from 'date-fns-tz'

export function formatNumber(num: number | string) {
  const number: string = num.toString()
  const splitedNumber = number.split('.')
  const decimals = splitedNumber.length > 1 ? '.' + splitedNumber[1] : ''
  const rgx = /(\d)(?=(\d{3})+(?!\d))/g
  const unit = splitedNumber[0].replace(rgx, '$1,')
  return unit + decimals
}

export function isNumber(number) {
  return typeof number === 'number'
}

export function getRgbaColor(r, g, b, a = 255) {
  return `rgba(${r}, ${g}, ${b}, ${a})`
}

export function percentageFromUtcTime(
  prevTime: number,
  currentTime: number,
  nextTime: number
) {
  if (nextTime > 0) {
    const startTime = utcToZonedTime(new Date(prevTime), TIMEZONE).getTime()
    const timeNow = utcToZonedTime(currentTime, TIMEZONE).getTime()
    const endTime = utcToZonedTime(new Date(nextTime), TIMEZONE).getTime()
    const range = endTime - startTime
    const diff = Math.max(0, endTime - timeNow)
    return 100 - (100 * diff) / range
  } else {
    return 100
  }
}
export function cropMiddle(text: string, length: number) {
  if (text.length > length) {
    const leftSizeLengh = Math.floor((length - 3) / 2)
    const rightSizeLength = text.length - leftSizeLengh
    return `${text.substring(0, leftSizeLengh)}...${text.substring(
      rightSizeLength
    )}`
  } else {
    return ''
  }
}

export function formatDate(timestamp: number) {
  try {
    return format(utcToZonedTime(timestamp, TIMEZONE), 'yyyy-MM-dd HH:mm:ss')
  } catch (err) {
    return
  }
}

export function formatDistanceToNow(timestamp: number) {
  try {
    return formatDistanceToNowStrict(utcToZonedTime(timestamp, TIMEZONE), {
      addSuffix: true,
    })
  } catch (err) {
    return
  }
}
