'use client';

import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

interface Props {
  orderId: string;
  prescriptionUrl?: string;
  onUploaded: () => void; // optional callback to refresh UI
}

export default function PrescriptionUploader({ orderId, prescriptionUrl, onUploaded }: Props) {
  const [uploading, setUploading] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append('prescription', file);
    formData.append('orderId', orderId);

    setUploading(true);
    try {
      // Make POST request to the backend API
      await axios.post('/api/orders/create-order', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      toast.success('Prescription uploaded successfully!');
      onUploaded(); 
    } catch (error) {
      console.error(error);
      toast.error('Upload failed!');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-2">
      {prescriptionUrl ? (
        <div>
          <p className="text-green-600">Prescription uploaded</p>
          <a href={prescriptionUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
            View Prescription
          </a>
        </div>
      ) : (
        <div>
          <label className="block font-medium">Upload Prescription:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            disabled={uploading}
            className="file-input file-input-bordered file-input-sm"
          />
          {uploading && <p className="text-sm text-gray-500">Uploading...</p>}
          <button
            onClick={handleUpload}
            disabled={uploading || !file}
            className="btn btn-primary mt-2"
          >
            {uploading ? 'Uploading...' : 'Upload Prescription'}
          </button>
        </div>
      )}
    </div>
  );
}
