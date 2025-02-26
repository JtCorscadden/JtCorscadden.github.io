import { useState, useEffect } from "react";
import { Asset } from "expo-asset";
import * as FileSystem from "expo-file-system";

/**
 * Loads and parses a JSON file from the local assets folder.
 * @param {string} fileName - The name of the JSON file (e.g., "lesson_structure.json").
 * @returns {object | null} - The parsed JSON data or null if there's an error.
 */
const useLoadJSON = (filePath) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadJSON = async () => {
      try {
        // Load the asset (ensure file is bundled in assets)
        const asset = Asset.fromModule(require('@/assets/datavocab/food/vegetables.json'));
        
        const fileInfo = await FileSystem.getInfoAsync(fileUri);
        if (!fileInfo.exists) {
          throw new Error(`File ${fileUri} not found`);
        }

        // Read file as text
        const jsonString = await FileSystem.readAsStringAsync(asset.localUri);
        const parsedData = JSON.parse(jsonString);

        setData(parsedData);
      } catch (err) {
        console.error("Error loading JSON:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    loadJSON();
  }, [filePath]);

  return { data, loading, error };
};

export default useLoadJSON;
