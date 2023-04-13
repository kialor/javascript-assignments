let photoSlideShow = {
  photoList: ["walking dog", "eating ice cream", "beach waves", "sunny field"],
  currentPhotoIndex: 2,

  nextPhoto: function () {
    if (this.currentPhotoIndex < this.photoList.length - 1) {
      this.currentPhotoIndex =this.currentPhotoIndex + 1;
      console.log(this.photoList[this.currentPhotoIndex]);
    } else {
      console.log("End of slideshow");
    }
  },

  prevPhoto: function () {
    if (this.currentPhotoIndex > 0) {
        this.currentPhotoIndex = this.currentPhotoIndex - 1;
      console.log(this.photoList[this.currentPhotoIndex]);
    } else {
      console.log("Start of slideshow");
    }
  },

  getCurrentPhoto: function () {
    return this.photoList[this.currentPhotoIndex];
  },
};

console.log(photoSlideShow.getCurrentPhoto());
photoSlideShow.nextPhoto();
photoSlideShow.prevPhoto();
photoSlideShow.prevPhoto();
