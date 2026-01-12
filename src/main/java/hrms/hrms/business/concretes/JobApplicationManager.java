package hrms.hrms.business.concretes;

import hrms.hrms.business.abstracts.JobApplicationService;
import hrms.hrms.core.utilities.ErrorResult;
import hrms.hrms.core.utilities.SuccessDataResult;
import hrms.hrms.core.utilities.SuccessResult;
import hrms.hrms.core.utilities.DataResult;
import hrms.hrms.core.utilities.Result;
import hrms.hrms.dataAccess.abstracts.JobApplicationDao;
import hrms.hrms.dataAccess.abstracts.JobAdvertisementDao;
import hrms.hrms.dataAccess.abstracts.JobSeekerDao;
import hrms.hrms.entities.concretes.JobApplication;
import hrms.hrms.entities.concretes.JobAdvertisement;
import hrms.hrms.entities.concretes.JobSeeker;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JobApplicationManager implements JobApplicationService {

    private JobApplicationDao jobApplicationDao;
    private JobSeekerDao jobSeekerDao;
    private JobAdvertisementDao jobAdvertisementDao;

    public JobApplicationManager(JobApplicationDao jobApplicationDao, 
                                 JobSeekerDao jobSeekerDao,
                                 JobAdvertisementDao jobAdvertisementDao) {
        this.jobApplicationDao = jobApplicationDao;
        this.jobSeekerDao = jobSeekerDao;
        this.jobAdvertisementDao = jobAdvertisementDao;
    }

    @Override
    public Result add(JobApplication jobApplication) {
        JobSeeker jobSeeker = this.jobSeekerDao.findById(jobApplication.getJobSeeker().getId())
            .orElse(null);
        
        if (jobSeeker == null) {
            return new ErrorResult("Job seeker not found!");
        }

        JobAdvertisement jobAdvertisement = this.jobAdvertisementDao.findById(jobApplication.getJobAdvertisement().getAdvertisementId())
            .orElse(null);
        
        if (jobAdvertisement == null) {
            return new ErrorResult("Job advertisement not found!");
        }

        JobApplication existing = this.jobApplicationDao.findByJobSeekerAndJobAd(
            jobSeeker.getId(),
            jobAdvertisement.getAdvertisementId()
        );

        if (existing != null) {
            return new ErrorResult("You have already applied to this job!");
        }

        jobApplication.setJobSeeker(jobSeeker);
        jobApplication.setJobAdvertisement(jobAdvertisement);

        this.jobApplicationDao.save(jobApplication);
        return new SuccessResult("Application submitted successfully!");
    }

    @Override
    public DataResult<List<JobApplication>> getByJobSeekerId(int jobSeekerId) {
        return new SuccessDataResult<>(
            this.jobApplicationDao.findByJobSeekerId(jobSeekerId),
            "Applications listed successfully"
        );
    }
}
