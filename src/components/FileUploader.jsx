// import { Button } from '@mui/material';
// import React, { useCallback, useState } from 'react';
// import { useDropzone } from 'react-dropzone';
// import logo from '../assets/file-upload.svg'
// // import { Button } from '../ui/button';

// const FileUploader = ({ fieldChange, mediaUrl }) => {
//   const [file, setFile] = useState([]);
//   const [fileUrl, setFileUrl] = useState(mediaUrl);

//   const onDrop = useCallback((acceptedFiles) => {
//     setFile(acceptedFiles);
//     fieldChange(acceptedFiles);
//     setFileUrl(URL.createObjectURL(acceptedFiles[0]));
//   }, [file]);

//   const { getRootProps, getInputProps } = useDropzone({
//     onDrop,
//     accept: {
//       'pdf/*': ['.pdf'],
//     },
//   });

//   return (
//     <div {...getRootProps()} className="flex flex-center flex-col bg-dark-3 rounded-xl cursor-pointer ">
//       <input {...getInputProps()} className="cursor-pointer" />
//       {fileUrl ? (
//         <>
//           <div className="flex flex-1 justify-center w-full p-5 lg:p-10">
//             <img src={fileUrl} alt="img" className="file_uploader-img" />
//           </div>
//           <p className="file_uploader-label">Click or drag Resume to replace</p>
//         </>
//       ) : (
//         <div className="file_uploader-box flex flex-col w-full ">
//           <img src={logo} alt="file-uploader" width={96} height={77} className=' self-center' />
//           <h3 className="base-medium text-light-2 mb-2 mt-6 self-center ">Drag Resume Here </h3>
//           <p className="text-light-4 small-regular mb-6 self-center">PDF</p>
//           <Button className="shad-button_dark_4">Select from Device</Button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default FileUploader;

import { Button } from '@mui/material';
import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import logo from '../assets/file-upload.svg'

const FileUploader = ({ fieldChange, mediaUrl }) => {
  const [file, setFile] = useState([]);
  const [fileUrl, setFileUrl] = useState(mediaUrl);

  const onDrop = useCallback((acceptedFiles) => {
    const pdfFiles = acceptedFiles.filter(file => file.type === 'application/pdf');
    if (pdfFiles.length > 0) {
      const pdfFile = pdfFiles[0];
      setFile([pdfFile]);
      fieldChange(pdfFile);
      setFileUrl(URL.createObjectURL(pdfFile));
    } else {
      // Handle error for invalid file type
      console.log("Invalid file type. Please upload a PDF file.");
    }
  }, [file]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'application/pdf', // Accept only PDF files
  });

  return (
    <div {...getRootProps()} className="flex flex-center flex-col bg-dark-3 rounded-xl cursor-pointer ">
      <input {...getInputProps()} className="cursor-pointer" />
      {fileUrl ? (
        <>
          <div className="flex flex-1 justify-center w-full p-5 lg:p-10">
            <img src={fileUrl} alt="img" className="file_uploader-img" />
          </div>
          <p className="file_uploader-label">Click or drag Resume to replace</p>
        </>
      ) : (
        <div className="file_uploader-box flex flex-col w-full ">
          <img src={logo} alt="file-uploader" width={96} height={77} className=' self-center' />
          <h3 className="base-medium text-light-2 mb-2 mt-6 self-center ">Drag Resume Here </h3>
          <p className="text-light-4 small-regular mb-6 self-center">PDF</p>
          <Button className="shad-button_dark_4">Select from Device</Button>
        </div>
      )}
    </div>
  );
};

export default FileUploader;
