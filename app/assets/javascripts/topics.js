$(function(){
  Dropzone.autoDiscover = false;

  $("#item-dropzone").dropzone({
    maxFilesize: 2,
    addRemoveLinks: true,
    dictRemoveFile:'削除',
    paramName: 'topic[image]',
    success: function(file, response){
			$(file.previewElement).find('.dz-remove').attr('id',response.topicId);
			$(file.previewElement).addClass('dz-success');
		},
    removedfile: function(file){
      var id = $(file.previewTemplate).find('.dz-remove').attr('id');
      $.ajax({
        type: 'DELETE',
        url: "/topics/" + id,
        success: function(data){
          console.log('data.message');
        }
      });

      var previewElement;
      return (previewElement = file.previewElement) != null ? (previewElement.parentNode.removeChild(file.previewElement)) : (void 0);


    }

  });
});
