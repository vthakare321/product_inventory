// src/shared/components/SearchInput/SearchInput.types.ts

import type { InputHTMLAttributes } from 'react';

export interface SearchInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  onClear?: () => void;
}