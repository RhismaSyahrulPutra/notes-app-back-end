<h1 align="center">Dicoding Notes App Back-End</h1>

Repository ini berisi kode sumber untuk Latihan Notes App Back-End dalam kursus **Belajar Back-End Pemula dengan JavaScript** di platform Dicoding.

## 📌 Fitur
- Menyimpan catatan
- Menampilkan Catatan
- Mengubah catatan
- Menghapus catatan

## 📂 Struktur Folder
```
📦 notes-app-back-end
├── 📁 src
│   ├── 📄 handler.js
│   ├── 📄 routes.js
│   ├── 📄 notes.js
│   ├── 📄 server.js
├── 📄 package.json
├── 📄 package-lock.json
└── 📄 README.md
```
## 📌 API Endpoint
| Method | Endpoint        | Deskripsi                  |
|--------|---------------|--------------------------|
| GET    | /notes        | Mendapatkan semua catatan |
| GET    | /notes/{id}   | Mendapatkan catatan berdasarkan ID |
| POST   | /notes        | Menambahkan catatan baru |
| PUT    | /notes/{id}   | Memperbarui catatan berdasarkan ID |
| DELETE | /notes/{id}   | Menghapus catatan berdasarkan ID |


## 🔧 Instalasi & Menjalankan Server
1. **Clone repositori ini**
   ```sh
   git clone https://github.com/yourusername/notes-app-back-end.git
   cd notes-app-back-end
   ```
2. **Install dependencies**
   ```sh
   npm install
   ```
3. **Jalankan server**
   ```sh
   npm run start
   ```
4. **Server akan berjalan di `localhost:5000`**
5. **Masuk ke aplikasi melalui**
   [http://notesapp-v1.dicodingacademy.com/](http://notesapp-v1.dicodingacademy.com/)
6. **Ganti web server API ke `localhost:5000`**

