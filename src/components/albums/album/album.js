import template from './album.html';

export default {
  template,
  bindings: {
    id: '=',
    album:'='
  },
  controller
};
  
controller.$inject = ['$mdDialog', 'albumsService', '$state', 'imagesService'];
  
  
function controller($mdDialog, albumsService, $state, imagesService) {

  this.add = newPic => {
    imagesService.add(newPic)
      .then(addedPic => {
        this.album.images.push(addedPic);
      })
      .catch(err => console.log(err));
  };

  this.remove = imageId => {
    imagesService.remove(imageId)
      .then(() => {
        $state.reload();
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
      template: '<add-image-dialog add="$ctrl.add" image="$ctrl.image" albumId="$ctrl.album._id"></add-image-dialog>',
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
 