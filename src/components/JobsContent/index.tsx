import { Button } from "@/components/Button";
import { Filters } from "@/components/Filters";
import { useJobs } from "./useJobs";
import { Card } from "@/components/Card";
import { Center, CircularProgress } from "@chakra-ui/react";
import { Banner } from "@/components/Banner";

export const JobsContent = (): React.ReactElement => {
  const {
    handleIsByCompany,
    handleOnlyLastSevenDays,
    removeTags,
    isByCompany,
    onlyLastSevenDays,
    filteredList,
  } = useJobs();

  return (
    <>
      <Banner textOne="We help you" textTwo="find your dream job" />
      <Filters title="Jobs">
        <Button active={isByCompany} onClick={handleIsByCompany}>
          By Company
        </Button>
        <Button active={onlyLastSevenDays} onClick={handleOnlyLastSevenDays}>
          Last 7 days
        </Button>
      </Filters>
      {!filteredList.length ? (
        <Center h="80vh">
          <CircularProgress isIndeterminate color="blue" />
        </Center>
      ) : (
        filteredList.map((job) => (
          <Card
            key={job.jobId}
            title={job.jobTitle}
            company={job.companyName}
            description={`${removeTags(job.jobDescription)}`}
            date={job.postedDate}
          />
        ))
      )}
    </>
  );
};
