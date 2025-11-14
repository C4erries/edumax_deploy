import { Button } from '@/components/shared/Button'
import type { RequestCardProps } from './types'
import { STATUS_CONFIG } from './constants'
import s from './RequestCard.module.css'

export const RequestCard = ({
  requestNumber,
  date,
  status,
  description,
  onDetailsClick,
  className,
}: RequestCardProps) => {
  const statusConfig = STATUS_CONFIG[status]

  return (
    <div className={[s.root, className].filter(Boolean).join(' ')} data-node-id="10:498">
      <div className={s.content}>
        <div className={s.mainSection}>
          <div className={s.header}>
            <div className={s.requestNumber}>
              <span className={s.requestLabel}>Заявка №:</span>
              <span className={s.requestValue}>{requestNumber}</span>
            </div>
            <div
              className={[
                s.clockWrapper,
                statusConfig.clockWrapperClassName === 'clockWrapperPending' &&
                  s.clockWrapperPending,
                statusConfig.clockWrapperClassName === 'clockWrapperApproved' &&
                  s.clockWrapperApproved,
                statusConfig.clockWrapperClassName === 'clockWrapperRejected' &&
                  s.clockWrapperRejected,
              ]
                .filter(Boolean)
                .join(' ')}
            >
              <img
                src={statusConfig.icon}
                alt={statusConfig.label}
                className={[
                  s.statusIcon,
                  status === 'rejected' && s.statusIconRejected,
                ]
                  .filter(Boolean)
                  .join(' ')}
              />
            </div>
          </div>

          <div className={s.card}>
            <div className={s.cardContent}>
              <p className={s.date}>{date}</p>
              <div className={s.statusWrapper}>
                <div
                  className={[
                    s.status,
                    statusConfig.className === 'statusPending' && s.statusPending,
                    statusConfig.className === 'statusApproved' && s.statusApproved,
                    statusConfig.className === 'statusRejected' && s.statusRejected,
                  ]
                    .filter(Boolean)
                    .join(' ')}
                >
                  <p className={s.statusText}>{statusConfig.label}</p>
                </div>
              </div>
              <p className={s.description}>{description}</p>
            </div>
          </div>
        </div>

        <Button
          label="Подробнее"
          variant="rightIcon"
          onClick={onDetailsClick}
          className={s.detailsButton}
        />
      </div>
    </div>
  )
}

