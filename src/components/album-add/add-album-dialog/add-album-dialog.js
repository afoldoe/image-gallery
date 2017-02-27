import template from './add-album-dialog.html';
import angular from 'angular';

export default {
  template,
  bindings: {
    add: '<',
    newAlbum : '<album'
  },
  controller
};
  
  
controller.$inject = ['$mdDialog', 'albumsService'];
function controller($mdDialog, albumsService) {
  this.album = angular.copy(this.newAlbum);

  this.cancel = () => {
    $mdDialog.hide();
  };

  this.save = () => {
    this.add(this.album);
    $mdDialog.hide();
  };
};