package hrms.hrms.api.controllers;

import hrms.hrms.business.abstracts.EmployerService;
import hrms.hrms.core.utilities.results.DataResult;
import hrms.hrms.core.utilities.results.Result;
import hrms.hrms.entities.concretes.Employer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/employers")
@CrossOrigin
public class EmployersController {

    private EmployerService employerService;

    @Autowired
    public EmployersController(EmployerService employerService) {
        this.employerService = employerService;
    }

    @GetMapping("/getall")
    public DataResult<List<Employer>> getAll() {
        return this.employerService.getAll();
    }

    @PostMapping("/add")
    public Result add(@RequestBody Employer employer) {
        return this.employerService.add(employer);
    }

    @GetMapping("/getbyid")
    public DataResult<Employer> getById(@RequestParam int id) {
        return this.employerService.getById(id);
    }

    @PutMapping("/update")
    public Result update(@RequestBody Employer employer) {
        return this.employerService.update(employer);
    }

    @DeleteMapping("/delete")
    public Result delete(@RequestParam int id) {
        return this.employerService.delete(id);
    }
}
