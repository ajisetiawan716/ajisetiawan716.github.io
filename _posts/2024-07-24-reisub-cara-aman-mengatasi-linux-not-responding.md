---
layout: post
tags: [Tutorial, Linux, Seputar Linux]
categories: []
#date: 2019-06-25 13:14:15
image: 'reisub-blog-post-thumb.png'
#excerpt: ''
#description:
#permalink:
title: 'REISUB: Cara Teraman Restart Linux Saat Not Responding'
---


Sering kali saat bekerja kita mengalami masa dimana sistem operasi tidak merespon setiap input dan tidak dapat melakukan operasi apapun atau yang sering dikenal dengan istilah _'Not Responding'._ Saat komputer mengalami *'Not Responding'* di sistem operasi Windows, biasanya kita akan menekan kombinasi tombol CTRL+ALT+DEL untuk membuka Task Manager, lalu melakukan penghentian paksa aplikasi yang menyebabkan *'Not Responding'* terjadi (meskipun tidak selalu berhasil). Namun, bilamana kalau kita menggunakan sistem operasi Linux ? Apakah menekan tombol kombinasi CTRL+ALT+ DEL dapat berfungsi juga? Sayangnya kombinasi tombol tersebut sering tidak berhasil untuk dilakukan saat komputer terjadi *hang*, dan memaksa kita untuk mematikannya secara paksa melalui tombol power.

Namun, mematikan komputer melalui tombol power sangat tidak disarankan karena beresiko dapat kehilangan data juga bisa merusak performa komputer itu sendiri. Apalagi jika masih menggunakan media penyimpanan seperti hardisk yang jika dipaksa berhenti secara paksa dapat meningkatkan resiko kehilangan data dan mengalami kerusakan akibat *bad sector*. Oleh karena itu, selalu usahakan untuk mematikan komputer dengan benar. Lalu bagaimana saat komputer betul-betul mengalami *hang/not responding* dan sama sekali tidak bisa diapa-apakan lagi selain dimatikan paksa? Salah satu cara paling aman untuk melakukan ini adalah dengan menggunakan kombinasi tombol **REISUB**.

### Apa itu REISUB?

REISUB adalah kombinasi tombol yang dapat digunakan pada sistem operasi Linux untuk melakukan restart komputer dengan aman saat sistem mengalami kegagalan atau hang. Kombinasi ini dikenal sebagai "Magic SysRq Key" dan merupakan bagian dari kernel Linux yang memungkinkan pengguna untuk mengirimkan perintah langsung ke kernel untuk mengatasi situasi darurat guna melakukan reboot dengan cara yang aman. Setiap huruf dalam REISUB memiliki fungsi spesifik yang membantu memulihkan sistem tanpa merusak data.

#### Persyaratan

- Sebelum dapat menggunakan REISUB, pastikan fitur **Magic SysRq** diaktifkan. Secara default, sebagian besar distribusi Linux modern sudah mengaktifkan fitur ini, namun kita bisa memeriksanya dengan perintah berikut:
  

```cat
cat /proc/sys/kernel/sysrq
```

Jika hasilnya adalah `1`, maka fitur tersebut aktif. Jika tidak, kita bisa mengaktifkannya dengan perintah berikut:

```echo
echo "1" | sudo tee /proc/sys/kernel/sysrq
```

Untuk pengaktifan permanen, tambahkan baris `kernel.sysrq = 1` ke dalam file `/etc/sysctl.conf` dan jalankan `sudo sysctl -p` untuk menerapkannya.

#### Cara Menggunakan REISUB

1. **Tekan dan Tahan Tombol Alt + PrintScreen/SysRq:** Ini adalah kombinasi dasar yang memulai proses REISUB. Tombol PrintScreen atau SysRq biasanya terletak di pojok kanan atas keyboard.
2. **Masukkan Kombinasi REISUB:** Dengan menahan Alt + PrintScreen/SysRq, tekan tombol berikut secara berurutan:
  
  - **R:** Mengembalikan kontrol keyboard dari X server.
  - **E:** Mengirim sinyal SIGTERM ke semua proses kecuali proses inti.
  - **I:** Mengirim sinyal SIGKILL ke semua proses kecuali proses inti.
  - **S:** Menyinkronkan semua sistem file.
  - **U:** Memount semua sistem file sebagai read-only.
  - **B:** Melakukan reboot sistem secara paksa.
  
  > **Catatan**: Pastikan setiap huruf ditekan dan dilepaskan sebelum melanjutkan ke huruf berikutnya.
  
  #### Urutan Fungsi REISUB
  
  - **R (UnRaw):** Mengembalikan kontrol keyboard dari X server ke kernel. Ini berguna jika sistem terjebak dalam mode grafis dan tidak merespons input keyboard.
  - **E (tErm):** Mengirim sinyal SIGTERM ke semua proses, yang meminta mereka untuk berhenti secara normal.
  - **I (kIll):** Mengirim sinyal SIGKILL ke semua proses, yang memaksa mereka untuk berhenti segera.
  - **S (Sync):** Menyinkronkan semua sistem file, memastikan bahwa semua data tertulis ke disk.
  - **U (Unmount):** Memount semua sistem file sebagai read-only untuk meminimalkan risiko kerusakan data.
  - **B (reBoot):** Melakukan reboot sistem secara paksa.

#### Cara Alternatif dengan Menggunakan REISUO

Selain menggunakan fungsi tombol kombinasi REISUB yang berfungsi untuk melakukan restart komputer dengan aman, terdapat cara alternatif lain yaitu menggunakan fungsi REISUO. Perbedaan utama antara REISUB dan REISUO pada sistem operasi Linux terletak pada hasil akhir dari setiap kombinasi tersebut. REISUB befungsi untuk melakukan restart secara paksa dengan aman, sedangkan REISUO berfungsi untuk melakukan *shutdown* atau mematikan paksa komputer secara aman.

**Cara Menggunakan REISUO**

Untuk menggunakan REISUO caranya hampir sama seperti cara menggunakan fungsi REISUB, berikut langkah-langkahnya.

1. **Tekan dan Tahan Tombol Alt + PrintScreen/SysRq:** Tombol PrintScreen atau SysRq biasanya terletak di pojok kanan atas keyboard.
  
2. **Masukkan Kombinasi REISUB:** Dengan menahan Alt + PrintScreen/SysRq, tekan tombol berikut secara berurutan:
  
  - **R** - **Unmount (unRaw)**: Mengambil kembali kontrol keyboard dari X server.
  - **E** - **Terminate (tErm)**: Mengirim sinyal `SIGTERM` ke semua proses.
  - **I** - **Kill**: Mengirim sinyal `SIGKILL` ke semua proses.
  - **S** - **Sync**: Menulis semua data yang belum disimpan ke disk.
  - **U** - **Unmount**: Meng-unmount semua sistem berkas.
  - **O** - **Power Off**: Mematikan komputer secara langsung.
  
  > **Catatan:** Kombinasi ini sebaiknya digunakan hanya ketika sistem tidak responsif dan metode lain untuk mematikan atau me-restart komputer tidak berhasil, karena meskipun lebih aman daripada me-reset secara paksa, ini masih bisa menyebabkan kehilangan data yang belum disimpan.
  

### Kapan Menggunakan REISUB vs REISUO?

- **REISUB** digunakan ketika kita ingin me-restart komputer dan kembali bekerja dengan sistem operasi segera setelah itu. Ini berguna ketika sistem mengalami hang dan perlu di-reboot untuk memulai ulang sesi kerja.
  
- **REISUO** digunakan ketika kita ingin mematikan komputer sepenuhnya. Ini cocok jika kita tidak ingin memulai ulang komputer, misalnya, ketika ingin mematikannya dan selesai bekerja.
  

### Mengapa REISUB Aman?

Kombinasi REISUB aman karena memberikan kesempatan bagi sistem untuk menyinkronkan dan me-mount sistem file sebagai *read-only* sebelum reboot, mengurangi risiko korupsi data. Ini adalah metode darurat yang lebih baik daripada hanya menekan tombol power untuk mematikan komputer secara paksa.

### Kesimpulan

Menggunakan REISUB bisa menyelamatkan sistem Linux kita dari kebekuan tanpa merusak data atau sistem file. Meskipun fitur Magic SysRq tidak selalu diaktifkan secara default, pengguna Linux harus mengetahui dan memanfaatkan alat ini dalam situasi darurat. Dengan memahami urutan REISUB dan fungsinya, kita dapat melakukan reboot sistem dengan aman saat menghadapi masalah *hang/not responding* pada Linux.

Semoga tutorial ini membantu Anda memahami dan menggunakan REISUB dengan efektif. Selalu pastikan untuk mencoba metode non-destruktif lain sebelum menggunakan REISUB, seperti mencoba untuk masuk ke terminal teks menggunakan `Ctrl + Alt + F1` hingga `F6`, atau memeriksa proses yang bermasalah dengan `Ctrl + Alt + Esc`.