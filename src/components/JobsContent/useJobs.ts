import { api } from "@/services/api";
import { useEffect, useState } from "react";

interface JobsProps {
  jobId: string;
  jobTitle: string;
  postedDate: string;
  companyName: string;
  postingDate: string;
  jobDescription: string;
}

export function useJobs() {
  const [jobs, setJobs] = useState<JobsProps[]>([]);
  const [isByCompany, setIsByCompany] = useState<Boolean>(false);
  const [onlyLastSevenDays, setOnlyLastSevenDays] = useState<Boolean>(false);

  useEffect(() => {
    const requestPayload = {
      companySkills: true,
      dismissedListingHashes: [],
      fetchJobDesc: true,
      jobTitle: "Business Analyst",
      locations: [],
      numJobs: 10,
      previousListingHashes: [],
    };

    api.post("jobs", requestPayload).then(({ data }) => {
      setJobs(data.jobs);
    });
  }, []);

  const today = Number(new Date());

  const isLastSevenDays = (job: JobsProps) =>
    (today - Number(new Date(job.postingDate))) / (1000 * 60 * 60 * 24) < 7;

  const sortByCompany = (a: JobsProps, b: JobsProps) => {
    if (a.companyName > b.companyName) return 1;
    if (a.companyName < b.companyName) return -1;
    return 0;
  };

  const newList = (): JobsProps[] => {
    const newJobList = [...jobs];
    if (isByCompany) return newJobList.sort(sortByCompany);
    if (onlyLastSevenDays) return newJobList.filter(isLastSevenDays);

    return newJobList;
  };

  const filteredList = isByCompany || onlyLastSevenDays ? newList() : jobs;

  const handleIsByCompany = () => {
    setIsByCompany(!isByCompany);
  };

  const handleOnlyLastSevenDays = () => {
    setOnlyLastSevenDays(!onlyLastSevenDays);
  };

  const removeTags = (string: string) => {
    const data = new DOMParser().parseFromString(string, "text/html");
    return data.body.textContent || "";
  };

  return {
    handleIsByCompany,
    handleOnlyLastSevenDays,
    removeTags,
    isByCompany,
    onlyLastSevenDays,
    filteredList,
  };
}
