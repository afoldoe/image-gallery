import template from './add-image-dialog.html';
import angular from 'angular';

export default {
  template,
  bindings: {
    add: '<',
    newImage : '<image',
    albumId: '='
  },
  controller
};
  
  
controller.$inject = ['$mdDialog', 'imagesService'];
function controller($mdDialog, imagesService) {
  this.image = angular.copy(this.newImage);

  this.cancel = () => {
    $mdDialog.hide();
  };

  this.save = () => {
    this.image.album = this.albumId;
    console.log(this.image);
    this.add(this.image);
    $mdDialog.hide();
  };
};

