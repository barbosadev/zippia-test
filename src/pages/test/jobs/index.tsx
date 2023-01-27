import { Button } from "@/components/Button";
import { Filters } from "@/components/Filters";
import { useJobs } from "./useJobs";
import { Card } from "@/components/Card";
import { Center, CircularProgress } from "@chakra-ui/react";
import { Banner } from "@/components/Banner";

export default function Jobs() {
  const {
    handleIsByCompany,
    handleOnlyLastSevenDays,
    filteredJobList,
    removeTags,
    isByCompany,
    onlyLastSevenDays,
  } = useJobs();

  return (
    <>
      <Banner>
        <>Find your dream job!</>
      </Banner>

      <Filters title="Jobs">
        <>
          <Button active={isByCompany} onClick={handleIsByCompany}>
            By Company
          </Button>
          <Button active={onlyLastSevenDays} onClick={handleOnlyLastSevenDays}>
            Last 7 days
          </Button>
        </>
      </Filters>
      {filteredJobList.length > 0 ? (
        filteredJobList.map(
          (job: {
            jobId: string;
            jobTitle: string;
            companyName: string;
            jobDescription: string;
            postedDate: string;
          }) => (
            <Card
              key={job.jobId}
              title={job.jobTitle}
              company={job.companyName}
              description={`${removeTags(job.jobDescription)}`}
              date={job.postedDate}
            />
          )
        )
      ) : (
        <Center h="60vh">
          <CircularProgress isIndeterminate color="blue" />
        </Center>
      )}
    </>
  );
}
