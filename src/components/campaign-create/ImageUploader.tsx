"use client";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useState, useRef } from "react";

interface ImageUploaderProps {
  placeholder?: string;
  onImageSelect?: (file: File) => void;
  className?: string;
}

export default function ImageUploader({
  placeholder = "لوگو قنادی شیرین",
  onImageSelect,
  className = "",
}: ImageUploaderProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);

      // Create preview URL
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);

      // Call parent callback
      onImageSelect?.(file);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleRemoveImage = () => {
    setSelectedFile(null);
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
      setPreviewUrl(null);
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className={`w-full ${className}`}>
      <div className="relative bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 rounded-xl p-3 sm:p-4 transition-all">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
          {/* Left side - Placeholder or selected image */}
          <div className="flex-1 flex items-center">
            {previewUrl ? (
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg overflow-hidden bg-zinc-100 dark:bg-zinc-700 flex-shrink-0">
                  <img
                    src={previewUrl}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100 truncate">
                    {selectedFile?.name}
                  </span>
                  <span className="text-xs text-zinc-500 dark:text-zinc-400">
                    {selectedFile?.size
                      ? (selectedFile.size / 1024 / 1024).toFixed(2)
                      : "0"}{" "}
                    MB
                  </span>
                </div>
              </div>
            ) : (
              <span className="text-zinc-500 dark:text-zinc-400 text-sm">
                {placeholder}
              </span>
            )}
          </div>

          {/* Right side - Action buttons */}
          <div className="flex items-center gap-2 self-end sm:self-auto">
            {selectedFile && (
              <Button
                isIconOnly
                size="sm"
                color="danger"
                variant="light"
                onPress={handleRemoveImage}
                className="text-zinc-500 hover:text-red-500"
              >
                <Icon
                  icon="solar:trash-bin-trash-bold-duotone"
                  className="text-base sm:text-lg"
                />
              </Button>
            )}

            <Button
              color="primary"
              variant="flat"
              size="sm"
              onPress={handleButtonClick}
              startContent={
                <Icon
                  icon="solar:gallery-add-bold-duotone"
                  className="text-base sm:text-lg"
                />
              }
            >
              <span className="hidden sm:inline">افزودن</span>
              <span className="sm:hidden">انتخاب</span>
            </Button>
          </div>
        </div>

        {/* Hidden file input */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileSelect}
          className="hidden"
        />
      </div>
    </div>
  );
}
