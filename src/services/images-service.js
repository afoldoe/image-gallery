imagesService.$inject = ['$http', 'apiUrl'];

export default function imagesService($http, apiUrl) {
  return {
    getAll() {
      return $http.get(`${apiUrl}/images`)
        .then(res => res.data)
        .catch(err => console.log(err));
    },

    add(image) {
      return $http.post(`${apiUrl}/images`, image)
        .then(res => res.data)
        .catch(err => console.log(err));
    },

    remove(imageId) {
      return $http.delete(`${apiUrl}/images/${imageId}`)
        .then(res => res.data)
        .catch(err => console.log(err));
    }
  };
}
