package hrms.hrms.dataAccess.abstracts;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import hrms.hrms.entities.concretes.JobAdvertisement;

public interface JobAdvertisementDao extends JpaRepository<JobAdvertisement, Integer> {
    @Query("SELECT j FROM hrms.hrms.entities.concretes.JobAdvertisement j WHERE j.applicationDeadline >= CURRENT_DATE ORDER BY j.applicationDeadline")
    List<JobAdvertisement> getByApplicationDeadline();
}