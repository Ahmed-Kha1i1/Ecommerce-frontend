/* eslint-disable react/prop-types */
import { useState } from "react";

//My database contains only one image for each product item, so 'images' always contain just the default image. Therefore, I use 'fakeImages'
function ImageSwitcher({ images = [], productName }) {
  const productNameEdited = productName?.replace(" ", "_");
  const defaultImageindex = images.findIndex((image) => image?.isDefault) || 0;
  const [selectedImage, setSelectedImage] = useState(defaultImageindex);

  const getImageName = (imageName, isFirst) =>
    isFirst ? imageName.replace(/320_\.jpg|218_\.jpg/g, "500_.jpg") : imageName;

  return (
    <div className="px-4 md:flex-1">
      {/* Main Image */}
      <div className="custom-scrollbar mb-4 h-[400px] rounded-lg md:h-[500px]">
        <img
          src={getImageName(
            images[selectedImage].imageName,
            selectedImage === 0,
          )}
          alt={`product_image-${productNameEdited}-${selectedImage + 1}`}
          className="mx-auto h-auto max-h-full w-auto max-w-[300px] rounded-lg object-cover md:max-w-[400px] lg:max-w-[500px]"
        />
      </div>

      {/* Thumbnails */}
      <div className="-mx-2 mb-4 flex">
        {images.map((image, index) => (
          <div key={index} className="flex-1 px-2">
            <button
              onClick={() => setSelectedImage(index)}
              className={`flex h-24 w-full items-center justify-center rounded-lg md:h-32 ${
                selectedImage === index
                  ? "ring-2 ring-inset ring-indigo-300"
                  : ""
              }`}
            >
              <img
                src={image.imageName}
                alt={`Thumbnail ${index + 1}`}
                className="h-full w-full rounded-lg object-cover"
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageSwitcher;
