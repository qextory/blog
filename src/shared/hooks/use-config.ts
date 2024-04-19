import { useAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

import { Style } from '@/shared/registry/styles';
import { Theme } from '@/shared/registry/themes';

interface Config {
  style: Style['name'];
  theme: Theme['name'];
  radius: number;
}

const configAtom = atomWithStorage<Config>('config', {
  style: 'default',
  theme: 'zinc',
  radius: 0.5,
});

export function useConfig() {
  return useAtom(configAtom);
}
