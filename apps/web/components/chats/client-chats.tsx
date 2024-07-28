'use client';

import dynamic from 'next/dynamic';

const Chats = dynamic(() => import('./chats'), { ssr: false });

export default function ClientChats() {
  return <Chats />;
}