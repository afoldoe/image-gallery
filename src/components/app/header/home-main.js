import template from './home-main.html';

export default {
  template,
  controller
};
  
controller.$inject = ['$mdDialog'];
  
  
function controller($mdDialog) {
  
  this.newAlbum = ($event) => {
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
    .then(newImage => {
      if(!newImage) return;
      angular.copy(newImage, this.image);
    });
  };

  
};
 