package hrms.hrms.business.concretes;

import hrms.hrms.business.abstracts.JobSeekerService;
import hrms.hrms.core.utilities.results.*;
import hrms.hrms.dataAccess.abstracts.JobSeekerDao;
import hrms.hrms.entities.concretes.JobSeeker;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JobSeekerManager implements JobSeekerService {

    private JobSeekerDao jobSeekerDao;

    @Autowired
    public JobSeekerManager(JobSeekerDao jobSeekerDao) {
        this.jobSeekerDao = jobSeekerDao;
    }

    @Override
    public DataResult<List<JobSeeker>> getAll() {
        return new SuccessDataResult<List<JobSeeker>>(
            this.jobSeekerDao.findAll(),
            "Job seekers listed successfully"
        );
    }

    @Override
    public Result add(JobSeeker jobSeeker) {
        this.jobSeekerDao.save(jobSeeker);
        return new SuccessResult("Job seeker added successfully");
    }

    @Override
    public DataResult<JobSeeker> getById(int id) {
        JobSeeker jobSeeker = this.jobSeekerDao.findById(id).orElse(null);
        if (jobSeeker != null) {
            return new SuccessDataResult<JobSeeker>(jobSeeker, "Job seeker found");
        }
        return new ErrorDataResult<JobSeeker>("Job seeker not found");
    }

    @Override
    public Result update(JobSeeker jobSeeker) {
        if (this.jobSeekerDao.existsById(jobSeeker.getId())) {
            this.jobSeekerDao.save(jobSeeker);
            return new SuccessResult("Job seeker updated successfully");
        }
        return new ErrorResult("Job seeker not found");
    }

    @Override
    public Result delete(int id) {
        if (this.jobSeekerDao.existsById(id)) {
            this.jobSeekerDao.deleteById(id);
            return new SuccessResult("Job seeker deleted successfully");
        }
        return new ErrorResult("Job seeker not found");
    }
}
