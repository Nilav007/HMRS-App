package hrms.hrms.entities.concretes;

import jakarta.persistence.*;

@Entity
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
    private String rePassword;

    // Default constructor
    public JobSeeker() {
    }

    // Parameterized constructor
    public JobSeeker(int id, String name, String lastName, String nationalId,
                     int birthDate, String email, String password, String rePassword) {
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.nationalId = nationalId;
        this.birthDate = birthDate;
        this.email = email;
        this.password = password;
        this.rePassword = rePassword;
    }

    // Getters and Setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getNationalId() {
        return nationalId;
    }

    public void setNationalId(String nationalId) {
        this.nationalId = nationalId;
    }

    public int getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(int birthDate) {
        this.birthDate = birthDate;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRePassword() {
        return rePassword;
    }

    public void setRePassword(String rePassword) {
        this.rePassword = rePassword;
    }
}