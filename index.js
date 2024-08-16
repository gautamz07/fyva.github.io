
// TODO -- Should be on window load 

const previewImage = document.getElementsByClassName('thumbnail__preview')

const toggleActiveThumb = () => {
  const previewImageActiveClone = document.getElementsByClassName('thumbnail__preview')

  for (preview of previewImageActiveClone) {
    preview.classList.remove('active')
  }
}

for (preview of previewImage) {
  preview.addEventListener('click', (e) => {
      const thumb__source = e.target.getAttribute('src')
      document.getElementById('mainPreviewProductImage').setAttribute('src', thumb__source)
      toggleActiveThumb()
      e.target.classList.add('active')
  })
}