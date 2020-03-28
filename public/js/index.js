function createNewThumbnail(thumbTitle){
  var thumbnailTitle = document.createElement('p')
  thumbnailTitle.innerHTML = thumbTitle;

  var thumbnail = document.createElement('div');
  thumbnail.style.height = '70px';
  thumbnail.style.width = '60px';
  thumbnail.backgroundColor = 'gray';
  thumbnail.appendChild(thumbnailTitle);

  document.body.appendChild(thumbnail);
}

createNewThumbnail(newDoc.name);
