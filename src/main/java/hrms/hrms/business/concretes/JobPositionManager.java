package hrms.hrms.business.concretes;

import hrms.hrms.business.abstracts.JobPositionService;
import hrms.hrms.core.utilities.results.*;
import hrms.hrms.dataAccess.abstracts.JobPositionDao;
import hrms.hrms.entities.concretes.JobPosition;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JobPositionManager implements JobPositionService {

    private JobPositionDao jobPositionDao;

    @Autowired
    public JobPositionManager(JobPositionDao jobPositionDao) {
        this.jobPositionDao = jobPositionDao;
    }

    @Override
    public DataResult<List<JobPosition>> getAll() {
        return new SuccessDataResult<List<JobPosition>>(
            this.jobPositionDao.findAll(),
            "Job positions listed successfully"
        );
    }

    @Override
    public Result add(JobPosition jobPosition) {
        this.jobPositionDao.save(jobPosition);
        return new SuccessResult("Job position added successfully");
    }

    @Override
    public DataResult<JobPosition> getById(int id) {
        JobPosition jobPosition = this.jobPositionDao.findById(id).orElse(null);
        if (jobPosition != null) {
            return new SuccessDataResult<JobPosition>(jobPosition, "Job position found");
        }
        return new ErrorDataResult<JobPosition>("Job position not found");
    }

    @Override
    public Result update(JobPosition jobPosition) {
        if (this.jobPositionDao.existsById(jobPosition.getId())) {
            this.jobPositionDao.save(jobPosition);
            return new SuccessResult("Job position updated successfully");
        }
        return new ErrorResult("Job position not found");
    }

    @Override
    public Result delete(int id) {
        if (this.jobPositionDao.existsById(id)) {
            this.jobPositionDao.deleteById(id);
            return new SuccessResult("Job position deleted successfully");
        }
        return new ErrorResult("Job position not found");
    }
}
