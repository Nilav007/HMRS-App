package hrms.hrms.api.controllers;

import hrms.hrms.business.abstracts.JobApplicationService;
import hrms.hrms.core.utilities.DataResult;
import hrms.hrms.core.utilities.Result;
import hrms.hrms.entities.concretes.JobApplication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/job-applications")
@CrossOrigin
public class JobApplicationController {

    private JobApplicationService jobApplicationService;

    public JobApplicationController(JobApplicationService jobApplicationService) {
        this.jobApplicationService = jobApplicationService;
    }

    @PostMapping("/apply")
    public Result apply(@RequestBody JobApplication jobApplication) {
        return this.jobApplicationService.add(jobApplication);
    }

    @GetMapping("/by-jobseeker/{jobSeekerId}")
    public DataResult<List<JobApplication>> getByJobSeeker(@PathVariable int jobSeekerId) {
        return this.jobApplicationService.getByJobSeekerId(jobSeekerId);
    }
}
