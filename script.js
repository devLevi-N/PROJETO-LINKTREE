function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("dark")
  // pegar a tag img
  const img = document.querySelector("#profile img")
  // substituir a imagem
  if (html.classList.contains("dark")) {
    // se tiver dark mode, adicionar a imagem light
    img.setAttribute("src", "./assets/MINHAFOTO.png")
  } else {
    // se tiver sem dark mode, manter a imagem normal
    img.setAttribute("src", "./assets/foto-redonda.png")
  }

  //  if (html.classList.contains("dark")) {
  //    html.classList.remove("dark")
  //  } else {
  //    html.classList.add("dark")
  //  }
}
