import template from './album.html';

export default {
  template,
  controller
};
  
controller.$inject = ['$mdDialog', 'albumsService'];
  
  
function controller($mdDialog, albumsService) {
  
  this.view = 'full';
  this.images = [];

  albumsService.get()
    .then(images => this.images = images)
    .catch(err => console.log(err));

  this.add = newPic => {
    albumsService.add(newPic)
      .then(addedPic => {
        this.images.push(addedPic);
      })
      .catch(err => console.log(err));
  };

  this.remove = imageId => {
    albumsService.remove(imageId)
      .then(() => {
        albumService.getAll()
          .then(images => this.images = images)
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  };

  this.newPic = ($event) => {
    var parentEl = angular.element(document.body);
    $mdDialog.show({
      parent: parentEl,
      targetEvent: $event,
      controllerAs: '$ctrl',
      bindToController: true,
      template: '<add-image-dialog add="$ctrl.add" image="$ctrl.image"></add-image-dialog>',
      controller() {},
      locals: {
        image: this.image,
        add: this.add
      },
      clickOutsideToClose: true,
      escapeToClose: true
    })
    .then(newimage => {
      if(!newImage) return;
      angular.copy(newImage, this.image);
    });
  };

  
};
 