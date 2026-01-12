package hrms.hrms.business.abstracts;

import hrms.hrms.core.utilities.DataResult;
import hrms.hrms.core.utilities.Result;
import hrms.hrms.entities.concretes.JobApplication;

import java.util.List;

public interface JobApplicationService {
    Result add(JobApplication jobApplication);
    DataResult<List<JobApplication>> getByJobSeekerId(int jobSeekerId);
}
