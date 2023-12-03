document.getElementById("form").addEventListener("submit", function(e) {
  e.preventDefault(); // Mencegah halaman refresh ketika form disubmit
  
  var judul = document.getElementById("judul").value;
  var konten = document.getElementById("konten").value;
  var file = judul.replace(/\s+/g, "-").toLowerCase() + ".md"; // Membuat nama file dari judul dan mengganti spasi dengan tanda strip

  var url = "https://api.github.com/repos/YOUR_USERNAME/YOUR_REPOSITORY/contents/_posts/" + file;
  var token = "YOUR_GITHUB_TOKEN";

  var data = {
    message: "Menambahkan postingan baru",
    content: btoa("---\ntitle: " + judul + "\n---\n\n" + konten) // Mengisi konten dengan metadata dan konten postingan
  };

  fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + token
    },
    body: JSON.stringify(data)
  })
  .then(response => {
    if (response.ok) {
      document.getElementById("pesan").textContent = "Postingan berhasil dibuat!";
      document.getElementById("form").reset();
    } else {
      document.getElementById("pesan").textContent = "Terjadi kesalahan saat membuat postingan.";
    }
  })
  .catch(error => {
    document.getElementById("pesan").textContent = "Terjadi kesalahan saat membuat postingan: " + error;
  });
});
