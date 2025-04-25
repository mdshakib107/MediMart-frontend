"use client";

import { useState } from "react";
import { toast } from "sonner";

interface Props {
  orderId: string;
  prescriptionUrl?: string;
  onUploaded: () => void; // optional callback to refresh UI
}

export default function PrescriptionUploader({
  orderId,
  prescriptionUrl,
  onUploaded,
}: Props) {
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
    formData.append("prescription", file);
    formData.append("orderId", orderId);

    setUploading(true);
    try {
      const response = await fetch("/api/orders/create-order", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to upload prescription");
      }

      toast.success("Prescription uploaded successfully!");
      onUploaded();
    } catch (error) {
      console.error(error);
      toast.error("Upload failed!");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-4 p-4 border rounded-lg bg-white shadow-sm mb-4">
      {prescriptionUrl ? (
        <div className="space-y-1">
          <p className="text-green-600 font-medium">Prescription uploaded!!</p>
          <a
            href={prescriptionUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800 transition-colors"
          >
            📎 View Prescription
          </a>
        </div>
      ) : (
        <div className="space-y-3">
          <label className="block font-medium text-gray-700">
            Upload Prescription:
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            disabled={uploading}
            className="block w-full border border-gray-300 rounded-md text-sm file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 disabled:opacity-50"
          />
          {uploading && <p className="text-sm text-gray-500">Uploading...</p>}
          <button
            onClick={handleUpload}
            disabled={uploading || !file}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {uploading ? "Uploading..." : "Upload Prescription"}
          </button>
        </div>
      )}
    </div>
  );
}
