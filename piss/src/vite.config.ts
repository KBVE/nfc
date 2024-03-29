import { defineConfig } from 'vite';
import { qwikVite } from '@builder.io/qwik/optimizer';
import { qwikCity } from '@builder.io/qwik-city/vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(() => {
  return {
    base: '/piss/',
    plugins: [
      qwikCity({

      }),
      qwikVite({
        
      }),
      tsconfigPaths({
        
      })
    ],
  };
});
