let photoSlideShow = {
  photoList: ["walking dog-0", "eating ice cream-1", "beach waves-2", "sunny field-3"],
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
photoSlideShow.prevPhoto();
photoSlideShow.prevPhoto();