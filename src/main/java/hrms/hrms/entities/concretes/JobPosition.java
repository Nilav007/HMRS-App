package hrms.hrms.entities.concretes;

import java.util.List;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;

@Entity
@Table(name = "job_position")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler", "jobAdvertisements"})
public class JobPosition {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "job_position_id")
    private int id;

    @Column(name = "title")
    private String title;

    @OneToMany(mappedBy = "jobPosition")
    private List<JobAdvertisement> jobAdvertisements;

    // Default constructor
    public JobPosition() {
    }

    // Parameterized constructor
    public JobPosition(int id, String title, List<JobAdvertisement> jobAdvertisements) {
        this.id = id;
        this.title = title;
        this.jobAdvertisements = jobAdvertisements;
    }

    // Getters and Setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public List<JobAdvertisement> getJobAdvertisements() {
        return jobAdvertisements;
    }

    public void setJobAdvertisements(List<JobAdvertisement> jobAdvertisements) {
        this.jobAdvertisements = jobAdvertisements;
    }
}