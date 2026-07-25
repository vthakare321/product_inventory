// src/shared/components/Modal/Modal.types.ts

import type { ReactNode } from 'react';

export interface ModalProps {
  isOpen: boolean;
  title?: string;
  children: ReactNode;
  onClose: () => void;
  footer?: ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
   showCloseButton?: boolean;
}