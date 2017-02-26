import template from './albums.html';

export default {
  template,
  bindings: {
    albums: '='
  },
  controller
};
  
controller.$inject = ['$mdDialog', 'albumsService', '$state'];
  
  
function controller($mdDialog, albumsService, $state) {
  
  this.remove = imageId => {
    albumsService.remove(imageId)
      .then((album) => {
        let index = this.albums.indexOf(album);
        if(index > -1) {this.albums.splice(index, 1);};
        $state.reload();
      })
      .catch(err => console.log(err));
  };
  
};

  
 