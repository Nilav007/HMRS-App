package hrms.hrms.business.concretes;

import java.sql.Date;
import java.util.List;


import org.springframework.stereotype.Service;

import hrms.hrms.business.abstracts.JobAdvertisementService;
import hrms.hrms.core.utilities.DataResult;
import hrms.hrms.core.utilities.Result;
import hrms.hrms.core.utilities.SuccessDataResult;
import hrms.hrms.core.utilities.SuccessResult;
import hrms.hrms.dataAccess.abstracts.JobAdvertisementDao;
import hrms.hrms.entities.concretes.JobAdvertisement;

@Service
public class JobAdvertisementManager implements JobAdvertisementService {

    private JobAdvertisementDao jobAdvertisementDao;

    public JobAdvertisementManager(JobAdvertisementDao jobAdvertisementDao) {
        this.jobAdvertisementDao = jobAdvertisementDao;
    }

    @Override
    public Result add(JobAdvertisement jobAdvertisement) {
        this.jobAdvertisementDao.save(jobAdvertisement);
        return new SuccessResult("Job posting added.");
    }

    @Override
    public DataResult<List<JobAdvertisement>> getAll() {
        return new SuccessDataResult<>(
                this.jobAdvertisementDao.findAll(),
                "All job advertisements listed"
        );
    }

    @Override
    public DataResult<List<JobAdvertisement>> getActiveJobAdvertisements() {
        return new SuccessDataResult<>(
                this.jobAdvertisementDao.getByApplicationDeadline(),
                "Active job advertisements listed"
        );
    }
}