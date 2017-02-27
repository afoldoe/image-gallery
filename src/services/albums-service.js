albumsService.$inject = ['$http', 'apiUrl'];

export default function albumsService($http, apiUrl) {
  return {
    getAll() {
      return $http.get(`${apiUrl}/albums`)
        .then(res => res.data)
        .catch(err => console.log(err));
    },

    get(albumId) {
      if(!albumId) {
        return this.getAll();
      } else {
        return $http.get(`${apiUrl}/albums/${albumId}`)
          .then(res => res.data)
          .catch(err => console.log(err));
      }
    },

    add(album) {
      return $http.post(`${apiUrl}/albums`, album)
        .then(res => res.data)
        .catch(err => console.log(err));
    },

    remove(albumId) {
      return $http.delete(`${apiUrl}/albums/${albumId}`)
        .then(res => res.data)
        .catch(err => console.log(err));
    }
  };
}
