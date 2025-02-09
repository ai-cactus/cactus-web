/**
 * Function to format the file size
 * @param sizeInBytes
 * @returns
 */
export const formatFileSize = (sizeInBytes: number): string => {
  const units = ["B", "KB", "MB", "GB", "TB"];
  let index = 0;

  while (sizeInBytes >= 1024 && index < units.length - 1) {
    sizeInBytes /= 1024;
    index++;
  }

  return `${sizeInBytes.toFixed(2)} ${units[index]}`;
};

/**
 * Function to validate the file type
 * @param file
 * @param validExtensions
 * @returns
 */
export const isValidFileType = (file: File, validExtensions: string[]) => {
  return validExtensions.some((ext) => file.name.toLowerCase().endsWith(ext));
};
