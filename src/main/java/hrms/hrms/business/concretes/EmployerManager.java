package hrms.hrms.business.concretes;

import hrms.hrms.business.abstracts.EmployerService;
import hrms.hrms.core.utilities.results.*;
import hrms.hrms.dataAccess.abstracts.EmployerDao;
import hrms.hrms.entities.concretes.Employer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployerManager implements EmployerService {

    private EmployerDao employerDao;

    @Autowired
    public EmployerManager(EmployerDao employerDao) {
        this.employerDao = employerDao;
    }

    @Override
    public DataResult<List<Employer>> getAll() {
        return new SuccessDataResult<List<Employer>>(
            this.employerDao.findAll(),
            "Employers listed successfully"
        );
    }

    @Override
    public Result add(Employer employer) {
        this.employerDao.save(employer);
        return new SuccessResult("Employer added successfully");
    }

    @Override
    public DataResult<Employer> getById(int id) {
        Employer employer = this.employerDao.findById(id).orElse(null);
        if (employer != null) {
            return new SuccessDataResult<Employer>(employer, "Employer found");
        }
        return new ErrorDataResult<Employer>("Employer not found");
    }

    @Override
    public Result update(Employer employer) {
        if (this.employerDao.existsById(employer.getId())) {
            this.employerDao.save(employer);
            return new SuccessResult("Employer updated successfully");
        }
        return new ErrorResult("Employer not found");
    }

    @Override
    public Result delete(int id) {
        if (this.employerDao.existsById(id)) {
            this.employerDao.deleteById(id);
            return new SuccessResult("Employer deleted successfully");
        }
        return new ErrorResult("Employer not found");
    }

    @Override
    public DataResult<Employer> login(String email, String password) {
        Employer employer = this.employerDao.findByEmail(email);
        if (employer == null) {
            return new ErrorDataResult<Employer>("Employer not found");
        }
        if (!employer.getPassword().equals(password)) {
            return new ErrorDataResult<Employer>("Invalid password");
        }
        return new SuccessDataResult<Employer>(employer, "Login successful");
    }
}
