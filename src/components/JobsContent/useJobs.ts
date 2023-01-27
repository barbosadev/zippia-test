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
  const [filteredJobList, setFilteredJobList] = useState<JobsProps[]>([]);
  const [isByCompany, setIsByCompany] = useState<Boolean>(false);
  const [onlyLastSevenDays, setOnlyLastSevenDays] = useState<Boolean>(false);

  useEffect(() => {
    api
      .post("jobs", {
        companySkills: true,
        dismissedListingHashes: [],
        fetchJobDesc: true,
        jobTitle: "Business Analyst",
        locations: [],
        numJobs: 10,
        previousListingHashes: [],
      })
      .then(({ data }) => {
        setJobs(data.jobs);
      });
  }, []);

  useEffect(() => {
    const customizeJobList = () => {
      const newJobList = [...jobs];

      if (isByCompany) {
        newJobList.sort((a, b) => {
          if (a.companyName > b.companyName) {
            return 1;
          }
          if (a.companyName < b.companyName) {
            return -1;
          }
          return 0;
        });
      }

      if (onlyLastSevenDays) {
        return newJobList.filter((job) => {
          return (
            (Number(new Date()) - Number(new Date(job.postingDate))) /
              (1000 * 60 * 60 * 24) <
            7
          );
        });
      }

      return newJobList;
    };

    if (isByCompany || onlyLastSevenDays) {
      setFilteredJobList(customizeJobList());
    } else {
      setFilteredJobList(jobs);
    }
  }, [jobs, isByCompany, onlyLastSevenDays]);

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
    filteredJobList,
    removeTags,
    isByCompany,
    onlyLastSevenDays,
  };
}
