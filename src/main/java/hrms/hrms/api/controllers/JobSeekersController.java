package hrms.hrms.api.controllers;

import hrms.hrms.business.abstracts.JobSeekerService;
import hrms.hrms.core.utilities.results.DataResult;
import hrms.hrms.core.utilities.results.Result;
import hrms.hrms.entities.concretes.JobSeeker;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/jobseekers")
@CrossOrigin
public class JobSeekersController {

    private JobSeekerService jobSeekerService;

    @Autowired
    public JobSeekersController(JobSeekerService jobSeekerService) {
        this.jobSeekerService = jobSeekerService;
    }

    @GetMapping("/getall")
    public DataResult<List<JobSeeker>> getAll() {
        return this.jobSeekerService.getAll();
    }

    @PostMapping("/add")
    public Result add(@RequestBody JobSeeker jobSeeker) {
        return this.jobSeekerService.add(jobSeeker);
    }

    @GetMapping("/getbyid")
    public DataResult<JobSeeker> getById(@RequestParam int id) {
        return this.jobSeekerService.getById(id);
    }

    @PutMapping("/update")
    public Result update(@RequestBody JobSeeker jobSeeker) {
        return this.jobSeekerService.update(jobSeeker);
    }

    @DeleteMapping("/delete")
    public Result delete(@RequestParam int id) {
        return this.jobSeekerService.delete(id);
    }
}
