---
date: 11-05-2026 12:00
name: Advan CPE V6 Telegram Bot
title: Advan CPE V6 Telegram Bot - Remote Modem Management | Manajemen Modem Jarak Jauh
tools: [OpenWrt, Node.js, JavaScript, Telegraf, Telegram Bot API]
image: https://raw.githubusercontent.com/ajisetiawan716/advan-cpe-v6-bot/main/assets/screenshot/advan-cpe-v6-bot.jpg
description: A powerful Telegram bot for remote management of Advan CPE V6 modems with real-time monitoring, band locking, WiFi control, SMS manager, and more.
remote_projects:
  - advan-cpe-v6-Bot
---

## 🇬🇧 English

**Advan CPE V6 Telegram Bot** is a Node.js-based Telegram bot designed for comprehensive remote management of Advan CPE V6 modems. Built with the Telegraf framework, it provides full control over modem functions through an intuitive Telegram interface with both inline keyboards and reply keyboard navigation.

The bot features **real-time monitoring** (signal strength, network status, device info, system resources), **band management** (lock/unlock individual bands or presets), **WiFi control** (toggle, edit SSID/password/encryption, QR code sharing), **LED control** (per-LED toggle or reset to auto), **SMS manager** (view inbox with pagination, send, delete per message, clear all), **network tools** (data switch, TTL control, cell lock, IP refresh), and **system commands** (reboot, IMEI view/change, log viewer).

Security is enforced through **UCI-based user authorization**, ensuring only registered Telegram chat IDs can access bot functions. The bot auto-login to the modem using stored credentials with session management for optimal performance.

### Key Features

| Category | Capabilities |
|----------|-------------|
| 📡 **Monitoring** | Signal (RSRP/RSRQ/SINR/RSSI), Status, Device Info, SysInfo, Traffic, Current Band |
| ⚙️ **Band Control** | Lock individual bands, presets (1+3, 1+3+5+40), auto mode, band mask configuration |
| 📶 **WiFi Management** | Toggle 2.4GHz/5GHz, edit SSID, password, encryption type, QR code sharing |
| 💡 **LED Control** | Per-LED toggle (WiFi/Data/Signal), all LEDs on/off, reset to auto mode |
| 📱 **SMS Manager** | View inbox with pagination, send SMS, delete per message, clear all inbox, saved numbers |
| 🌐 **Network Tools** | Data on/off, TTL control (presets/custom), cell lock/unlock, manual PCI/EARFCN input |
| 🔄 **System** | Reboot, IMEI view and change, log viewer with clear function |
| 🔐 **Security** | UCI-based chat ID authorization, session management, auto-login |

### Technical Stack

- **Runtime**: Node.js 16+ with Telegraf 4.x
- **API Communication**: HTTP requests via curl-client to modem endpoints
- **Authentication**: Token-based session with SHA256 hashing
- **Configuration**: OpenWrt UCI system (`advan_bot` config section)
- **QR Generation**: QRCode library for WiFi sharing
- **Session Management**: In-memory cache with automatic refresh
- **Packaging**: OpenWrt IPK package with init.d service script

---

## 🇮🇩 Bahasa Indonesia

**Advan CPE V6 Telegram Bot** adalah bot Telegram berbasis Node.js yang dirancang untuk manajemen jarak jauh modem Advan CPE V6 secara komprehensif. Dibangun dengan framework Telegraf, bot ini menyediakan kontrol penuh atas fungsi modem melalui antarmuka Telegram yang intuitif dengan navigasi inline keyboard dan reply keyboard.

Bot ini dilengkapi dengan **monitoring real-time** (kekuatan sinyal, status jaringan, info perangkat, sumber daya sistem), **manajemen band** (kunci/buka band individual atau preset), **kontrol WiFi** (toggle, edit SSID/password/enkripsi, berbagi QR code), **kontrol LED** (toggle per-LED atau reset ke otomatis), **SMS manager** (lihat inbox dengan paginasi, kirim, hapus per pesan, hapus semua), **network tools** (data switch, kontrol TTL, cell lock, refresh IP), dan **perintah sistem** (reboot, lihat/ubah IMEI, log viewer).

Keamanan diterapkan melalui **otorisasi pengguna berbasis UCI**, memastikan hanya chat ID Telegram yang terdaftar yang dapat mengakses fungsi bot. Bot melakukan auto-login ke modem menggunakan kredensial yang tersimpan dengan manajemen sesi untuk kinerja optimal.

### Fitur Utama

| Kategori | Kemampuan |
|----------|-----------|
| 📡 **Monitoring** | Sinyal (RSRP/RSRQ/SINR/RSSI), Status, Info Perangkat, SysInfo, Traffic, Band Saat Ini |
| ⚙️ **Kontrol Band** | Kunci band individual, preset (1+3, 1+3+5+40), mode otomatis, konfigurasi band mask |
| 📶 **Manajemen WiFi** | Toggle 2.4GHz/5GHz, edit SSID, password, tipe enkripsi, berbagi QR code |
| 💡 **Kontrol LED** | Toggle per-LED (WiFi/Data/Sinyal), semua LED on/off, reset ke mode otomatis |
| 📱 **SMS Manager** | Lihat inbox dengan paginasi, kirim SMS, hapus per pesan, hapus semua inbox, nomor tersimpan |
| 🌐 **Network Tools** | Data on/off, kontrol TTL (preset/kustom), cell lock/unlock, input PCI/EARFCN manual |
| 🔄 **Sistem** | Reboot, lihat dan ubah IMEI, log viewer dengan fungsi hapus |
| 🔐 **Keamanan** | Otorisasi chat ID berbasis UCI, manajemen sesi, auto-login |

### Teknologi

- **Runtime**: Node.js 16+ dengan Telegraf 4.x
- **Komunikasi API**: HTTP request via curl-client ke endpoint modem
- **Autentikasi**: Sesi berbasis token dengan hashing SHA256
- **Konfigurasi**: Sistem UCI OpenWrt (seksi konfigurasi `advan_bot`)
- **QR Generation**: Library QRCode untuk berbagi WiFi
- **Manajemen Sesi**: Cache in-memory dengan refresh otomatis
- **Packaging**: Paket IPK OpenWrt dengan service init.d

---

### Preview

{% capture carousel_images %}

https://raw.githubusercontent.com/ajisetiawan716/advan-cpe-v6-bot/main/assets/screenshot/advan-cpe-v6-bot.jpg
https://raw.githubusercontent.com/ajisetiawan716/advan-cpe-v6-bot/main/assets/screenshot/1.png
https://raw.githubusercontent.com/ajisetiawan716/advan-cpe-v6-bot/main/assets/screenshot/2.png
https://raw.githubusercontent.com/ajisetiawan716/advan-cpe-v6-bot/main/assets/screenshot/3.png
{% endcapture %}
{% include elements/carousel.html %}

<p class="text-center">
{% include elements/button.html link="https://github.com/ajisetiawan716/advan-cpe-v6-bot" text="View on GitHub" %}
</p>
