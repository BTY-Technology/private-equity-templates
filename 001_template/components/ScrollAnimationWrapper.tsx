'use client';

import { useEffect } from 'react';
import { useScrollAnimations } from '@/utils/scrollAnimations';

export default function ScrollAnimationWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  useScrollAnimations();

  return <>{children}</>;
}
