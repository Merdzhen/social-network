import { classNames } from 'shared/lib/classNames/classNames';
import cls from './FILENAME.module.scss';

  interface FILENAMEProps {
    className?: string;
  }

export const FILENAME = ({ className }: FILENAMEProps) => (
  <div className={classNames(cls.FILENAME, {}, [className])}>
    Sample Component
  </div>
);
