import { atom } from 'recoil';

export const networkAtom = atom({
  key: "network",
  default: 1,
});

export const jobAtom = atom({
  key: "job",
  default: 2,
});

export const notificationAtom = atom({
  key: "notification",
  default: 12,
});

export const messagingAtom = atom({
  key: "messaging",
  default: 15,
});