import { useState, useEffect } from 'react';
import { JobItem } from './types';

export function useJobItems(searchText: string) {
  const [jobItems, setJobItems] = useState<JobItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const jobItemsSliced = jobItems.slice(0, 7);
  useEffect(() => {
    if (!searchText) return;
    setIsLoading(true);
    const fetchData = async () => {
      const response = await fetch(
        `https://bytegrad.com/course-assets/projects/rmtdev/api/data?search=${searchText}`
      );

      const data = await response.json();
      console.log(data);
      setIsLoading(false);
      setJobItems(data.jobItems);
    };
    fetchData();
  }, [searchText]);

  return [jobItemsSliced, isLoading] as const;
}
