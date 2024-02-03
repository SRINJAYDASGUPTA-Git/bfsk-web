"use client"
import React, { useState } from 'react';
import Link  from 'next/link';
import { syllabusList } from '@/constants';

interface Pdf {
    title: string;
    link: string;
    fileName: string;
    }

function PdfDownloader() {
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = ({pdf}:{pdf:Pdf}) => {
    setIsLoading(true);

    // Use fetch or axios for more robust error handling and progress tracking
    fetch(pdf.link)
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = pdf.fileName;
        link.click();
        window.URL.revokeObjectURL(url);

        setIsLoading(false);
      })
      .catch(error => {
        // Handle errors more gracefully (e.g., display an error message)
        console.error('Error downloading PDF:', error);
        setIsLoading(false);
      });
  };

  return (
    <div className='container mx-auto text-xl p-10'>
    <p className="text-gray-600 mb-4 text-xl">
        Welcome to BFSK's online syllabus portal! Here you'll find PDFs outlining the curriculum, grading policies, and important information for each belt level. Downloading and reviewing these documents regularly is crucial for your karate journey.
      </p>
    <ul className="list-none p-0 my-4">
      {syllabusList.map((pdf) => (
        <li key={pdf.title} className="flex items-center px-4 py-2 hover:bg-gray-100">
          <Link
            href={pdf.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4 text-blue-500 hover:underline"
          >
            {pdf.title}
          </Link>
          {isLoading && (
            <span className="text-gray-500 animate-spin">Downloading...</span>
          )}
          {!isLoading && (
            <button
              onClick={() => handleDownload({pdf})}
              className="inline-flex items-center px-4 py-2 bg-blue-500 text-white font-bold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded-full"
            >
              Download
            </button>
          )}
        </li>
      ))}
    </ul>
    </div>
  );
}

export default PdfDownloader;
