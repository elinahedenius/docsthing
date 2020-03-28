function save(){
  var text = document.getElementById('paperContent').innerHTML;
  var title = document.getElementById('docName').value;
  console.log(title);
  console.log(text);

  if (docNames.includes(title)){
      console.log('already exits');
      return;
  }
  else{
      var newDoc = new Document();
      newDoc.name = document.getElementById('docName').value;
      newDoc.content = document.getElementById('paperContent').innerHTML;
      docNames.push(newDoc.name);
      return newDoc;
  }
}
