---
title: "Cara Install OpenWRT di Mini PC HP T620"
layout: post
tag: [OpenWrt, Tips, Tips OpenWrt, Mini PC, HP T20, Tutorial, Teknologi]
#date: 04-09-2025 19:29:01
image: /assets/img/content/install-openwrt-hp-t620.png
image-alt: Cara Install OpenWrt di Mini PC HP T620
---


OpenWrt merupakan sistem operasi berbasis Linux yang didesain khusus agar berjalan di perangkat jaringan seperti router, modem, akses poin dan perangkat lainnya. Beda dengan sistem operasi kebanyakan yang diperuntukan untuk jaringan, OpenWrt lebih fleksibel dan powerful karena bisa dikustomisasi sesuai kebutuhan.

Dengan kemudahannya tersebut, OpenWrt dapat berjalan mulai dari di perangkat dengan spesifikasi yang minim sekalipun; seperti *Single Boar Computer* (SBC), Set-Top Box, Mini Router hingga dapat berjalan di perangkat dengan spesifikasi yang lebih tinggi, seperti komputer PC, mini PC, dan laptop.

Untuk kali ini aku akan meng-install OpenWrt di perangkat Mini PC HP T620. Dengan spesifikasi perangkat sebagai berikut:

```
CPU: AMD GX-217GA Dual-Core 1.65 GHz
GPU: Radeon HD 8280E
RAM: DDR3L SO-DIMM, bawaan 4 GB, + 8GB : 12 GB Total (2 slot)
Storage: mSATA SSD 32 GB 
Port: 2×USB 3.0, 4×USB 2.0, 2×DisplayPort, LAN Gigabit, audio in/out, PS/2, serial/parallel opsional
Jaringan: Port LAN Gigabit Ethernet
Power: Adapter 65 W (19,5V 3,33A)
Dimensi/berat: ±22×4×24 cm, bobot ±1,3 kg
OS: HP ThinPro (bawaan)
```

Dengan pertimbangan spesifikasi tersebut, menurutku sudah lebih dari cukup buat dipakai sebagai router, *media sharing*, NAS (*Network Attached Storage*), dan juga *file sharing* di jaringan yang aku pakai sekarang.

### Persiapan Sebelum Install

Baiklah, sebelum masuk ke proses instalasi, ada beberapa hal yang perlu disiapkan dahulu, yaitu:

- USB Flashdisk
- File Image OpenWrt (Aku pakai OpenWrt build dari RTAWrt)
- Laptop/PC
- Aplikasi Rufus/Ballena Etcher.

### Langkah-langkah Instalasi OpenWrt di Mini PC HP T620

Setelah menyiapkan hal tersebut, berikut adalah langkah-langkah untuk meng-install OpenWrt di Mini PC HP T620.

1. **Colokkan flashdisk ke laptop/PC.**
   Setelah itu buka aplikasi Rufus atau Balena Etcher. Karena aku lebih familiar dengan Rufus, jadi aku pakai itu.

2. **Pilih file image OpenWrt.**
   Cari file image OpenWrt yang tadi sudah kamu download, lalu masukkan ke Rufus.

3. **Atur opsi di Rufus.**
   
   * Device: pilih flashdisk yang tadi dicolok.
   * Boot selection: pilih file image OpenWrt.
   * Partition scheme: biasanya pakai `MBR` kalau untuk BIOS, atau `GPT` kalau Mini PC kamu support UEFI.

4. **Mulai proses flashing.**
   Klik tombol *Start*, tunggu proses selesai, dan flashdisk siap dipakai untuk instalasi.

5. **Boot Mini PC dari flashdisk.**
   Colok flashdisk ke Mini PC HP T620, lalu masuk BIOS/boot menu (biasanya tekan tombol `F9` atau `Esc` saat boot). Pilih boot dari USB.

Untuk sementara kita menjalankan sistem operasi OpenWrt melalui boot dengan flashdisk, jika ingin meng-install di internal storage Mini PC-nya seperti di SSD/HDD. Kita perlu ikuti langkah-langkah berikut. Namun, jika ingin menjalankannya melalui flashdisk maka tidak perlu ikuti langkah-langkah ini.

Setelah proses *flashing* selesai, Mini PC kamu bisa langsung boot dari flashdisk dan OpenWrt sudah bisa dipakai. Mode ini cocok kalau mau coba-coba dulu tanpa mengutak-atik storage internal. Jadi, kalau masih pengen uji coba, cukup jalankan lewat flashdisk saja.

### Instalasi OpenWrt ke Storage Internal (SSD/HDD)

Kalau udah yakin dan mau install OpenWrt langsung ke storage internal (misalnya SSD), kita bisa ikutin langkah-langkah berikut:

1. **Boot ke OpenWrt lewat flashdisk.**
   Colok flashdisk yang udah diisi image OpenWrt tadi, lalu boot Mini PC dari flashdisk.

2. **Login ke OpenWrt.**
   Setelah masuk, biasanya kamu bisa login lewat SSH:
   
   ```bash
   ssh root@192.168.1.1
   ```
   
   (Default IP OpenWrt: `192.168.1.1`, user `root`, tanpa password).
   
   Atu bisa login melalui webui LuCi di browser dengan mengunjungi Default IP OpenWrt `http://192.168.1.1`

3. **Cek storage internal.**
   Gunakan perintah berikut buat lihat partisi/storage yang ada:
   
   ```bash
   lsblk
   fdisk -l
   ```
   
   Dari sini, pastikan kamu tahu device SSD/HDD yang mau dipasang (contoh: `/dev/sda`).

4. **Salin sistem ke storage internal.**
   Untuk meng-install OpenWrt ke storage internal, kita perlu menyalin image OpenWrt ke dalam storage sistem. Oleh karena itu, salin file image OpenWrt yang sudah kita siapkan sebelumnya. Untuk menyalinnya bisa via FTP atau TinyFM (file manager yang biasanya sudah terpasang secara bawaan pada OS custom seperti RTAWRT). Untuk instalasinya biasanya OpenWrt pakai tool `sysupgrade`. Tapi kalau dari live USB/flashdisk, kita bisa pakai `dd` untuk menyalin image, di terminal OpenWrt kita ketikkan perintah:
   
   ```bash
   # Hati-hati! Pastikan device benar (misal /dev/sda)
   dd if=/path/to/openwrt-x86-64-combined-squashfs.img of=/dev/sda bs=4M conv=fsync
   ```
   
    Sebagai contoh, disini aku menyimpan file image OpenWrt-nya dengan nama file `RTA-WRT-OpenWrt-24.10.1-X86_64_Generic_Ext4_Rootfs-all-tunnel.img.gz` di root (~). Maka perintahnya yaitu:
   
   ```bash
   cd
   dd if=/RTA-WRT-OpenWrt-24.10.1-X86_64_Generic_Ext4_Rootfs-all-tunnel.img.gz of=/dev/sda bs=4M conv=fsync
   ```
   
   Setelah selesai, jalankan:
   
   ```bash
   sync
   ```

5. **Pasang bootloader (kalau perlu).**
   Untuk beberapa build (misalnya x86\_64), image OpenWrt sudah termasuk bootloader (GRUB). Jadi biasanya setelah `dd` langsung bisa dipakai.

6. **Reboot tanpa flashdisk.**
   Cabut flashdisk, lalu reboot Mini PC. Kalau berhasil, OpenWrt akan booting langsung dari SSD/HDD.

7. **Konfigurasi awal.**
   
   * Ubah password root dengan perintah:
     
     ```bash
     passwd
     ```
   
   * Atur jaringan sesuai kebutuhan (misalnya static IP, DHCP, atau VLAN).
   
   * Kalau pakai LuCI (antarmuka web), biasanya bisa langsung diakses lewat browser di `http://192.168.1.1`.

> ### Catatan Penting
> 
> * Kalau cuma pengen nyobain, **jalankan dari flashdisk aja**.
> * Kalau mau pakai permanen, **install ke SSD/HDD** dengan langkah di atas.
> * Hati-hati saat pakai `dd`, salah pilih device bisa ngehapus data di disk lain.

---

### Memperbesar Partisi Root

Setelah kita meng-install OpenWrt ke SSD/HDD internal, kita coba akan memperbesar partisi root. Secara default, setelah install OpenWrt ke SSD/HDD, ukuran partisi root biasanya kecil (sesuai ukuran image OpenWrt, misalnya cuma 100 MB – 256 MB). Supaya seluruh kapasitas storage bisa dipakai, kita perlu memperbesar partisi root. Apalagi jika ingin digunakan untuk menyimpan banyak program, perlu banyak penyimpanan yang kosong.

Baiklah, Berikut langkah-langkahnya:

1. **Update dan install parted.**
   
   ```bash
   opkg update
   opkg install parted
   ```

2. **Cek disk dan partisi yang terdeteksi.**
   Jalankan:
   
   ```bash
   parted -l -s
   ```
   
   Dari output ini, cari disk utama (misalnya `/dev/sda`) dan lihat nomor partisinya (biasanya root ada di **partisi 2**).

3. **Resize partisi root.**
   Misalnya root ada di `/dev/sda2`, jalankan:
   
   ```bash
   parted -f -s /dev/sda resizepart 2 100%
   ```
   
   Perintah ini akan memperbesar partisi root hingga menggunakan 100% dari kapasitas disk.

4. **Reboot sistem.**
   
   ```bash
   reboot
   ```

5. **(Opsional) Resize filesystem.**
   Kadang filesystem belum otomatis ikut melebar. Kalau mau pastikan, install paket `resize2fs`:
   
   ```bash
   opkg update
   opkg install e2fsprogs
   resize2fs /dev/sda2
   ```

> ### Catatan Penting
> 
> * Pastikan benar nama disk dan nomor partisi root (contoh: `/dev/sda2`). Salah pilih partisi bisa bikin data hilang.
> * Proses resize ini aman dilakukan setelah instalasi OpenWrt ke SSD/HDD, tidak perlu dilakukan kalau hanya ingin boot dari flashdisk.
> * Kalau storage kamu gede (misalnya SSD 120 GB), setelah resize root partition, kapasitas penuh bisa dipakai untuk install paket tambahan, simpan file, atau buat overlay.

---

### Penutup

Nah, itu tadi langkah-langkah lengkap buat install OpenWrt di Mini PC HP T620, mulai dari coba jalan lewat flashdisk sampai install permanen ke SSD/HDD hingga memperbesar partisi root biar storage kepake maksimal. Dengan setup ini, Mini PC kamu bisa berubah jadi router andalan yang fleksibel, bisa sekalian dipakai buat NAS, media server, atau kebutuhan jaringan lain sesuai kebutuhanmu. Semoga tutorial ini bermanfaat dan selamat ngoprek! 🚀
