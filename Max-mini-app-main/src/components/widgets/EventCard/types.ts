export interface EventCardProps {
    title: string;
    dateTime: string;     
    imageSrc: string;     
    onRegister?: () => void;
    className?: string;
    labelButton: string;
  }
  