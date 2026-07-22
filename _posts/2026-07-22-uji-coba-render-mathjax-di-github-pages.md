---
title: "Uji Coba Render MathJax di GitHub Pages"
layout: post
date: 2026-07-22 14:39:00 +0700
tags: [test, math, github-pages]
description: "Postingan dummy untuk mengetes rendering formula matematika menggunakan MathJax."
---

Halo! Ini adalah file *dummy* untuk mengetes apakah skrip MathJax yang dipasang di *template* GitHub Pages sudah bekerja dengan sempurna.

### 1. Uji Coba Formula Inline (Sebaris)
Mari kita lihat apakah rumus sebaris ini bekerja bersama teks biasa. Energi ekuivalen dengan massa disimbolkan dengan persamaan $$ E = mc^2 $$, atau rumus gaya seperti $$ Fx $$.

### 2. Uji Coba Formula Blok (Display)
Di bawah ini adalah Rumus Kuadrat (ABC) yang seharusnya terender besar dan otomatis berada di tengah dalam blok tersendiri:

$$
x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$

### 3. Uji Coba Kalkulus Dasar (Integral)
Contoh lain untuk mengecek rendering simbol tingkat lanjut seperti limit dan integral:

$$
\int_{a}^{b} x^2 \, dx = \frac{b^3 - a^3}{3}
$$

### 4. Uji Coba Matriks
Apakah tabel angka matematika bisa disusun dengan rapi?

$$
\begin{bmatrix}
1 & 2 & 3 \\
4 & 5 & 6 \\
7 & 8 & 9
\end{bmatrix}
$$

---

### 5. Pengecekan Elemen Markdown Standar
Hanya untuk memastikan skrip MathJax tidak merusak elemen bawaan markdown:
* **Teks tebal** dan *teks miring*
* [Tautan ke Google](https://google.com)

| Nama Fitur | Status Render |
| :--- | :--- |
| **MathJax Script** | *Menunggu hasil inspeksi...* |
| **Standard Markdown** | Normal |

Jika semua rumus di atas berubah menjadi format visual matematika yang cantik di blog *live* Anda, berarti instalasi MathJax Anda sukses 100%!