'use client';

import React, { useState, useRef } from 'react';
import Cropper, { ReactCropperElement } from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import Image from 'next/image';

const ImageCropper = () => {
  const cropperRef = useRef<ReactCropperElement>(null);
  const [image, setImage] = useState<string>('/img/blog-details/1.jpg');
  const [croppedImage, setCroppedImage] = useState<string | null>(null);

// upload image
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result) {
          setImage(reader.result as string);
          setCroppedImage(null);
        }
      };
      reader.readAsDataURL(file);
    }
  };

// crop image
  const cropImage = () => {
    const cropper = cropperRef.current?.cropper;
    if (cropper) {
      setCroppedImage(cropper.getCroppedCanvas().toDataURL());
    }
  };

  const handleDownload = () => {
    if (croppedImage) {
      const a = document.createElement('a');
      a.href = croppedImage;
      a.download = 'cropped-image.png';
      a.click();
    }
  };

  // zoom
  const handleZoom = (zoomType: 'in' | 'out') => {
    const cropper = cropperRef.current?.cropper;
    if (cropper) {
      cropper.zoom(zoomType === 'in' ? 0.1 : -0.1);
    }
  };

  // rotate
  const handleRotate = (direction: 'left' | 'right') => {
    const cropper = cropperRef.current?.cropper;
    if (cropper) {
      cropper.rotate(direction === 'right' ? 90 : -90);
    }
  };

  // new crop
  const resetCrop = () => {
    const cropper = cropperRef.current?.cropper;
    if (cropper) {
      cropper.reset();
      setCroppedImage(null);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Cropper */}
        <div>
          <h1 className="text-2xl font-bold mb-4 text-center">Image Cropper</h1>
          {image && (
            <Cropper
              src={image}
            //   style={{ width: '100%' }}
              initialAspectRatio={16 / 7}
              guides={true}
              ref={cropperRef}
              viewMode={1}
              autoCropArea={1}
              background={false}
              className='object-contain h-96 w-full'
            />
          )}
        </div>

            {/* Buttons  */}
        <div className="flex flex-col items-center space-y-4">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="w-full md:w-fit px-4 py-2 bg-blue-500 rounded shadow hover:bg-blue-600 cursor-pointer"
          />
          {/* Preview Image  */}
          {croppedImage && (
            <div className="mt-4 text-center">
              <h2 className="text-xl font-semibold mb-2">Preview</h2>
              <Image width={208} height={112} src={croppedImage} alt="Cropped Preview" className="rounded shadow-md mx-auto w-52 h-28 object-contain" />
            </div>
          )}
          <div className="flex flex-col sm:flex-row flex-wrap gap-4">
            <button onClick={cropImage} className="px-4 py-2 bg-gray-100 rounded shadow hover:bg-gray-200">
              Crop Image
            </button>
            {croppedImage && (
              <button onClick={handleDownload} className="px-4 py-2 bg-gray-100 rounded shadow hover:bg-gray-200">
                Download
              </button>
            )}
            <button onClick={() => handleZoom('in')} className="px-4 py-2 bg-gray-100 rounded shadow hover:bg-gray-200">
              Zoom In
            </button>
            <button onClick={() => handleZoom('out')} className="px-4 py-2 bg-gray-100 rounded shadow hover:bg-gray-200">
              Zoom Out
            </button>
            <button onClick={() => handleRotate('left')} className="px-4 py-2 bg-gray-100 rounded shadow hover:bg-gray-200">
              Rotate Left
            </button>
            <button onClick={() => handleRotate('right')} className="px-4 py-2 bg-gray-100 rounded shadow hover:bg-gray-200">
              Rotate Right
            </button>
            <button onClick={resetCrop} className="px-4 py-2 bg-gray-100 rounded shadow hover:bg-gray-200">
              New Crop
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCropper;
