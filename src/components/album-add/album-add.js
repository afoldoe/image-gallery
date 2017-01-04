import template from './album-add.html';

export default {
  template,
  transclude: true,
  controller
};

 
function controller($mdDialog) {
  
  this.newAlbum = ($event) => {
    var parentEl = angular.element(document.body);
    $mdDialog.show({
      parent: parentEl,
      targetEvent: $event,
      controllerAs: '$ctrl',
      bindToController: true,
      template: '<add-album-dialog></add-album-dialog>',
      controller() {},
      locals: {
        image: this.image,
        add: this.add
      },
      clickOutsideToClose: true,
      escapeToClose: true
    })
    .then(newImage => {
      if(!newImage) return;
      angular.copy(newImage, this.image);
    });
  };

  
};