# _plugins/mermaid_hook.rb
Jekyll::Hooks.register [:posts, :pages], :pre_render do |doc|
  # Cegat blok markdown ```mermaid sebelum diproses oleh Kramdown & Rouge
  doc.content = doc.content.gsub(/^```mermaid\s*$(.*?)^```\s*$/m) do
    code = $1
    # Atribut markdown="0" adalah perisai agar Jekyll tidak menyentuh isinya sama sekali!
    "<div class=\"mermaid\" markdown=\"0\">#{code}</div>"
  end
end
