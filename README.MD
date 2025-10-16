# Simple User REST API (Node.js & Express)

API ini di-hosting secara gratis menggunakan **Vercel** dan dapat diakses secara publik.

**🚀 Live API URL**: https://node-rest-api-javan.vercel.app/

---

## Teknologi yang Digunakan

-   **Backend**: Node.js
-   **Web Framework**: Express.js
-   **Validasi**: Joi
-   **Unique ID Generator**: UUID (versi 8)
-   **Platform Hosting**: Vercel

---

## Instalasi & Menjalankan Secara Lokal

Untuk menjalankan proyek ini di komputer Anda, ikuti langkah-langkah berikut:

1.  **Clone Repository**
    ```bash
    git clone https://github.com/AdityaNugraha1/node-rest-api-javan.git
    cd node-rest-api-javan
    ```

2.  **Install Semua Dependensi**
    ```bash
    npm install
    ```

3.  **Jalankan Server (Mode Development)**
    Perintah ini menggunakan `nodemon` untuk menjalankan server, yang akan otomatis me-restart setiap kali ada perubahan pada kode.
    ```bash
    npm run dev
    ```
    Setelah dijalankan, server akan aktif di `http://localhost:3000`.

---

## Dokumentasi Endpoint API

Semua endpoint berawal dari `/users`.

### 1. Mendapatkan Semua Pengguna

-   **Method**: `GET`
-   **Endpoint**: `/users`
-   **Deskripsi**: Mengambil daftar lengkap semua pengguna yang tersimpan.

    **Contoh Penggunaan (cURL):**
    ```bash
    curl -X GET https://node-rest-api-javan.vercel.app/users
    ```

    **Contoh Respons Sukses (200 OK):**
    ```json
    {
        "status": "success",
        "message": "Successfully retrieved all users.",
        "data": [
            {
                "id": "1",
                "name": "Budi Santoso",
                "email": "budi.santoso@example.com"
            },
            {
                "id": "2",
                "name": "Siti Aminah",
                "email": "siti.aminah@example.com"
            }
        ]
    }
    ```

### 2. Menambahkan Pengguna Baru

-   **Method**: `POST`
-   **Endpoint**: `/users`
-   **Deskripsi**: Membuat satu pengguna baru. Nama dan email wajib diisi.

    **Contoh Penggunaan (cURL):**
    ```bash
    curl -X POST https://node-rest-api-javan.vercel.app/users \
    -H "Content-Type: application/json" \
    -d '{"name": "Rina Putri", "email": "rina.putri@example.com"}'
    ```

    **Contoh Respons Sukses (201 Created):**
    ```json
    {
        "status": "success",
        "message": "User created successfully.",
        "data": {
            "id": "b1b7a282-a5d1-4f7e-a128-5d2b1f8e9a6f",
            "name": "Rina Putri",
            "email": "rina.putri@example.com"
        }
    }
    ```

    **Contoh Respons Gagal (400 Bad Request - Validasi Error):**
    ```json
    {
        "status": "error",
        "message": "Invalid input.",
        "errors": [
            "\"email\" must be a valid email"
        ]
    }
    ```

### 3. Mendapatkan Detail Satu Pengguna

-   **Method**: `GET`
-   **Endpoint**: `/users/:id`
-   **Deskripsi**: Mengambil detail pengguna berdasarkan `id` yang unik.

    **Contoh Penggunaan (cURL):**
    ```bash
    curl -X GET https://node-rest-api-javan.vercel.app/users/1
    ```

    **Contoh Respons Sukses (200 OK):**
    ```json
    {
        "status": "success",
        "message": "User found.",
        "data": {
            "id": "1",
            "name": "Budi Santoso",
            "email": "budi.santoso@example.com"
        }
    }
    ```

    **Contoh Respons Gagal (404 Not Found - User tidak ditemukan):**
    ```json
    {
        "status": "error",
        "message": "User with ID 999 not found."
    }
    ```