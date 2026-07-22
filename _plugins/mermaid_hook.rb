# _plugins/mermaid_hook.rb
require 'cgi'

Jekyll::Hooks.register [:posts, :pages], :pre_render do |doc|
  # Buat wadah penyimpanan sementara untuk kode mermaid
  doc.data['mermaid_blocks'] = []
  
  # Cari dan "culik" semua kode di dalam blok ```mermaid ... ```
  doc.content = doc.content.gsub(/^```mermaid\s*$(.*?)^```\s*$/m) do
    code = $1
    doc.data['mermaid_blocks'] << code
    # Tinggalkan jejak placeholder murni tanpa simbol aneh
    "MERMAID_PLACEHOLDER_#{doc.data['mermaid_blocks'].length - 1}"
  end
end

Jekyll::Hooks.register [:posts, :pages], :post_render do |doc|
  # Setelah Jekyll selesai mengubah Markdown jadi HTML, kembalikan kodenya
  if doc.data['mermaid_blocks']
    doc.data['mermaid_blocks'].each_with_index do |code, index|
      # Escape HTML agar tag < atau > tidak merusak struktur web
      escaped_code = CGI.escapeHTML(code)
      
      # Ganti teks placeholder dengan elemen <div> Mermaid
      # Sekaligus hapus tag <p> yang biasanya ditambahkan otomatis oleh Kramdown
      doc.output = doc.output.gsub("<p>MERMAID_PLACEHOLDER_#{index}</p>", "<div class=\"mermaid\">#{escaped_code}</div>")
      doc.output = doc.output.gsub("MERMAID_PLACEHOLDER_#{index}", "<div class=\"mermaid\">#{escaped_code}</div>")
    end
  end
end
