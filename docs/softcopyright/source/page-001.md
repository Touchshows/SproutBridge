--- SproutBridge 源程序分页稿 ---
文件: app/changelog/page.tsx
页码: 001
日期: 2025-10-14

```
  1 | 'use client';
  2 | 
  3 | import { useState, useEffect } from 'react';
  4 | 
  5 | interface ChangelogItem {
  6 |   type: string;
  7 |   description: string;
  8 | }
  9 | 
 10 | interface ChangelogEntry {
 11 |   version: string;
 12 |   date: string;
 13 |   title: string;
 14 |   type: 'major' | 'minor' | 'patch';
 15 |   changes: ChangelogItem[];
 16 | }
 17 | 
 18 | interface ChangelogData {
 19 |   changelog: ChangelogEntry[];
 20 | }
 21 | 
 22 | export default function ChangelogPage() {
 23 |   const [changelog, setChangelog] = useState<ChangelogEntry[]>([]);
 24 |   const [loading, setLoading] = useState(true);
 25 |   const [error, setError] = useState<string | null>(null);
 26 | 
 27 |   useEffect(() => {
 28 |     fetch('/data/changelog.json')
 29 |       .then(res => {
 30 |         if (!res.ok) {
 31 |           throw new Error(`HTTP error! status: ${res.status}`);
 32 |         }
 33 |         return res.json();
 34 |       })
 35 |       .then((data: ChangelogData) => {
 36 |         if (data && data.changelog && Array.isArray(data.changelog)) {
 37 |           setChangelog(data.changelog);
 38 |         } else {
 39 |           throw new Error('Invalid changelog data format');
 40 |         }
 41 |         setLoading(false);
 42 |       })
 43 |       .catch(err => {
 44 |         console.error('Failed to load changelog:', err);
 45 |         setError(err.message || 'Failed to load changelog');
 46 |         setLoading(false);
 47 |       });
 48 |   }, []);
 49 | 
 50 |   const getVersionBadgeColor = (type: string) => {
```
