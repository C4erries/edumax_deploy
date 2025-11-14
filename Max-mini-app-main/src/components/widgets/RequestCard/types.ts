export type RequestStatus = 'pending' | 'approved' | 'rejected' | 'ready'

export interface RequestCardProps {
  requestNumber: string
  date: string
  status: RequestStatus
  description: string
  onDetailsClick?: () => void
  className?: string
}

export interface StatusConfig {
    label: string
    className: string
    icon: string
    clockWrapperClassName: string
  }

