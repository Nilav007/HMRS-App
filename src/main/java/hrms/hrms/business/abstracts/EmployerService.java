package hrms.hrms.business.abstracts;

import hrms.hrms.core.utilities.results.DataResult;
import hrms.hrms.core.utilities.results.Result;
import hrms.hrms.entities.concretes.Employer;

import java.util.List;

public interface EmployerService {
    DataResult<List<Employer>> getAll();
    Result add(Employer employer);
    DataResult<Employer> getById(int id);
    Result update(Employer employer);
    Result delete(int id);
    DataResult<Employer> login(String email, String password);
}
