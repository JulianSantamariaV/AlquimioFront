import { ChangeEvent, useState } from "react";
import { Input } from "../ui/input";

interface FileUploaderProps {
  onFileSelect: (files: File[]) => void;
}

const FileUploader: React.FC<FileUploaderProps> = ({ onFileSelect }) => {
  const [files, setFiles] = useState<File[]>([]);

  function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.files?.length) {
      const selectedFiles = Array.from(e.target.files); 
      setFiles(selectedFiles);
      onFileSelect(selectedFiles);
    }
  }

  return (
    <div className="space-y-4">
      <Input type="file" multiple onChange={handleFileChange} />
      {files.length > 0 && (
        <div className="mb-4 text-sm">
          {files.map((file, index) => (
            <p key={index}>Archivo: {file.name} ({(file.size / 1024).toFixed(2)} KB)</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default FileUploader;
