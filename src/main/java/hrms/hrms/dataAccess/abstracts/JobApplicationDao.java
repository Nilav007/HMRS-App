package hrms.hrms.dataAccess.abstracts;

import hrms.hrms.entities.concretes.JobApplication;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface JobApplicationDao extends JpaRepository<JobApplication, Integer> {
    
    @Query("SELECT ja FROM hrms.hrms.entities.concretes.JobApplication ja WHERE ja.jobSeeker.id = :jobSeekerId")
    List<JobApplication> findByJobSeekerId(@Param("jobSeekerId") int jobSeekerId);
    
    @Query("SELECT ja FROM hrms.hrms.entities.concretes.JobApplication ja WHERE ja.jobSeeker.id = :jobSeekerId AND ja.jobAdvertisement.advertisementId = :jobAdId")
    JobApplication findByJobSeekerAndJobAd(@Param("jobSeekerId") int jobSeekerId, @Param("jobAdId") int jobAdId);
}
