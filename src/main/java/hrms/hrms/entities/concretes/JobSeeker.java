package hrms.hrms.entities.concretes;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "job_seeker")
public class JobSeeker {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "job_seekerId")
    private int id;

    @Column(name = "name")
    private String name;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "natioal_id")
    private String nationalId;

    @Column(name = "birthDate")
    private int birthDate;

    @Column(name = "email")
    private String email;

    @Column(name = "password")
    private String password;

    @Column(name = "re-password")
    private String rePaswword;
    
    // Explicit getId() for compilation - Lombok not processing correctly
    public int getId() {
        return id;
    }
    
    public void setId(int id) {
        this.id = id;
    }
}
