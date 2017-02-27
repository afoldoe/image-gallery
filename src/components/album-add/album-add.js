import template from './album-add.html';

export default {
  template,
  transclude: true,
  bindings: {
    albums: '='
  },
  controller
};

controller.$inject = ['$mdDialog', 'albumsService'];
function controller($mdDialog, albumsService) {


  this.add = newAlbum => {
    albumsService.add(newAlbum)
      .then(addedAlbum => {
        this.albums.push(addedAlbum);
      })
      .catch(err => console.log(err));
  };

  
  this.newAlbum = ($event) => {
    var parentEl = angular.element(document.body);
    $mdDialog.show({
      parent: parentEl,
      targetEvent: $event,
      controllerAs: '$ctrl',
      bindToController: true,
      template: '<add-album-dialog add="$ctrl.add" album="$ctrl.album"></add-album-dialog>',
      controller() {},
      locals: {
        album: this.album,
        add: this.add
      },
      clickOutsideToClose: true,
      escapeToClose: true
    })
    .then(newAlbum => {
      if(!newAlbum) return;
      angular.copy(newAlbum, this.album);
    });
  };

  
};