import type { RequestStatus, StatusConfig } from './types'
import timeIcon from '@/assets/icons/time (2).svg'
import checkIcon from '@/assets/icons/check (9).svg'
import rejectIcon from '@/assets/icons/Vector (5).svg'

export const STATUS_CONFIG: Record<RequestStatus, StatusConfig> = {
  pending: {
    label: 'Ожидает решения',
    className: 'statusPending',
    icon: timeIcon,
    clockWrapperClassName: 'clockWrapperPending',
  },
  approved: {
    label: 'Одобрено',
    className: 'statusApproved',
    icon: checkIcon,
    clockWrapperClassName: 'clockWrapperApproved',
  },
  rejected: {
    label: 'Отклонено',
    className: 'statusRejected',
    icon: rejectIcon,
    clockWrapperClassName: 'clockWrapperRejected',
  },
  ready: {
    label: 'Готово',
    className: 'statusApproved',
    icon: checkIcon,
    clockWrapperClassName: 'clockWrapperApproved',
  },
}

