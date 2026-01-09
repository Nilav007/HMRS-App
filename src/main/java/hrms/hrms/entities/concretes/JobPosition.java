package hrms.hrms.entities.concretes;

import java.util.List;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "job_position")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler","jobAdvertisements"})
public class JobPosition {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "job_position_id")
    private int id;

    @Column(name = "title")
    private String title;
    
    @OneToMany(mappedBy = "jobPosition")
    private List<JobAdvertisement> jobAdvertisements;
    
    // Explicit getId() for compilation - Lombok not processing correctly
    public int getId() {
        return id;
    }
    
    public void setId(int id) {
        this.id = id;
    }
}
