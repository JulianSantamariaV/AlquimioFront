import { ChangeEvent, useRef, useState } from "react";
import { Button } from "../ui/button";
import { Trash, Upload } from "lucide-react";

interface FileUploaderProps {
  onFileSelect: (files: File[]) => void;
}

const FileUploader: React.FC<FileUploaderProps> = ({ onFileSelect }) => {
  const [files, setFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.files?.length) {
      const selectedFiles = Array.from(e.target.files);
      
      setFiles(prevFiles => [...prevFiles, ...selectedFiles]);
      onFileSelect([...files,...selectedFiles]);
      console.log(files.length, 'files');
      console.log(selectedFiles.length,'selectedFiles');
      console.log(previews.length, 'previews');

      const newPreviews = selectedFiles.map(file => URL.createObjectURL(file));
      setPreviews(prevPreviews => [...prevPreviews, ...newPreviews]);
    }
  }

  function removeImage(index: number) {
    const updatedFiles = files.filter((_, i) => i !== index);
    const updatedPreviews = previews.filter((_, i) => i !== index);

    setFiles(updatedFiles);
    setPreviews(updatedPreviews);
    onFileSelect(updatedFiles);
  }

  return (
    <div className="space-y-4">
      <input
        type="file"
        multiple
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        accept="image/jpg, image/jpeg, image/png"
      />

      <Button type="button" variant="outline" className="cursor-pointer" onClick={() => fileInputRef.current?.click()}>
        <Upload/> Sube una imagen
      </Button>

      {previews.length > 0 && (
        <div className="grid lg:grid-cols-5 md:grid-cols-5 sm:grid-cols-4 grid-cols-2 gap-12 mt-4">
          {previews.map((src, index) => (
            <div key={index} className="relative w-32 h-32">
              
              <button
                className="absolute top-1 right-0 translate-x-2 -translate-y-2 z-10 p-1 bg-red-500/50 text-white rounded-full hover:bg-red-600 transition cursor-pointer"
                onClick={() => removeImage(index)}
              >
                <Trash className="w-4 h-4" />
              </button>
              
              <img src={src} alt={`Preview ${index}`} className="w-full h-full object-cover rounded-lg" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FileUploader;

