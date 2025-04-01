# Kos Management API

Ini adalah API manajemen kos yang dibangun menggunakan **Express.js**, **PostgreSQL**, dan **Sequelize** sebagai ORM.

## Teknologi yang Digunakan

- **Node.js**: Runtime JavaScript untuk membangun backend.
- **Express.js**: Framework web untuk membangun API.
- **PostgreSQL**: Database untuk menyimpan data.
- **Sequelize**: ORM untuk berinteraksi dengan database PostgreSQL.
- **Multer**: Middleware untuk menangani multipart/form-data, digunakan untuk unggah file.
- **ImageKit**: Layanan penyimpanan gambar.
- **bcrypt**: Library untuk melakukan hash pada password pengguna.

## Instalasi

1. Clone repository:
   ```bash
   git clone https://github.com/RifqiAfandi/Website-Kos-Project.git

   cd WEBSITE-KOS-PROJECT
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Atur variabel lingkungan dengan membuat file `.env`. Berikut contoh isinya:

   ```bash
   DB_USERNAME=
   DB_PASSWORD=
   DB_NAME=
   DB_HOST=
   DB_PORT=
   PORT=

   IMAGEKIT_PUBLIC_KEY=
   IMAGEKIT_PRIVATE_KEY=
   IMAGEKIT_URL=

   JWT_SECRET=
   JWT_EXPIRES_IN=1h
   ```

4. Jalankan migrasi database:
   ```bash
   npx sequelize db:create
   npx sequelize db:migrate
   npx sequelize db:seed:all
   ```

5. Jalankan server:
   ```bash
   npm run dev
   ```

## Hashing Password

Password di-hash menggunakan **bcrypt** saat registrasi pengguna untuk memastikan keamanan.

## Dokumentasi

Dokumentasi API yang detail tersedia melalui Postman. Kunjungi:
```
hhttps://documenter.getpostman.com/view/38718469/2sAYkKGGj2
```
