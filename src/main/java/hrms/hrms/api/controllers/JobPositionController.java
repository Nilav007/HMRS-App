package hrms.hrms.api.controllers;

import hrms.hrms.business.abstracts.JobPositionService;
import hrms.hrms.core.utilities.results.DataResult;
import hrms.hrms.core.utilities.results.Result;
import hrms.hrms.entities.concretes.JobPosition;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/jobpositions")
@CrossOrigin
public class JobPositionController {

    private JobPositionService jobPositionService;

    @Autowired
    public JobPositionController(JobPositionService jobPositionService) {
        this.jobPositionService = jobPositionService;
    }

    @GetMapping("/getall")
    public DataResult<List<JobPosition>> getAll() {
        return this.jobPositionService.getAll();
    }

    @PostMapping("/add")
    public Result add(@RequestBody JobPosition jobPosition) {
        return this.jobPositionService.add(jobPosition);
    }

    @GetMapping("/getbyid")
    public DataResult<JobPosition> getById(@RequestParam int id) {
        return this.jobPositionService.getById(id);
    }

    @PutMapping("/update")
    public Result update(@RequestBody JobPosition jobPosition) {
        return this.jobPositionService.update(jobPosition);
    }

    @DeleteMapping("/delete")
    public Result delete(@RequestParam int id) {
        return this.jobPositionService.delete(id);
    }
}
