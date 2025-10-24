--- SproutBridge 源程序分页稿 ---
文件: tsconfig.json
页码: 191
日期: 2025-10-14

```
  1 | {
  2 |   "compilerOptions": {
  3 |     "target": "ES2020",
  4 |     "lib": [
  5 |       "dom",
  6 |       "dom.iterable",
  7 |       "esnext"
  8 |     ],
  9 |     "allowJs": false,
 10 |     "skipLibCheck": true,
 11 |     "strict": true,
 12 |     "forceConsistentCasingInFileNames": true,
 13 |     "noEmit": true,
 14 |     "esModuleInterop": true,
 15 |     "module": "esnext",
 16 |     "moduleResolution": "bundler",
 17 |     "resolveJsonModule": true,
 18 |     "isolatedModules": true,
 19 |     "jsx": "preserve",
 20 |     "incremental": true,
 21 |     "baseUrl": ".",
 22 |     "paths": {
 23 |       "@/*": [
 24 |         "./*"
 25 |       ]
 26 |     },
 27 |     "plugins": [
 28 |       {
 29 |         "name": "next"
 30 |       }
 31 |     ]
 32 |   },
 33 |   "include": [
 34 |     "next-env.d.ts",
 35 |     "**/*.ts",
 36 |     "**/*.tsx",
 37 |     ".next/types/**/*.ts"
 38 |   ],
 39 |   "exclude": [
 40 |     "node_modules"
 41 |   ]
 42 | }
 43 | 
```
