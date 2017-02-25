import template from './albums.html';

export default {
  template,
  controller
};
  
controller.$inject = ['$mdDialog', 'albumsService'];
  
  
function controller($mdDialog, albumsService) {

  albumsService.getAll()
    .then(albums => this.albums = albums)
    .catch(err => console.log(err));
  
};

  
 