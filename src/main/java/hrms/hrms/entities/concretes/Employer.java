package hrms.hrms.entities.concretes;

import java.util.List;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import jakarta.validation.constraints.*;

@Entity
@Table(name = "employers")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler", "jobAdvertisements"})
public class Employer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @NotBlank(message = "Company name is required")
    @Size(min = 2, max = 200, message = "Company name must be between 2 and 200 characters")
    @Column(name = "company_name", nullable = false, length = 200)
    private String companyName;

    @NotBlank(message = "Company website is required")
    @Pattern(regexp = "^(https?://)?(www\\.)?[a-zA-Z0-9-]+\\.[a-zA-Z]{2,}.*$",
            message = "Please enter a valid website URL")
    @Column(name = "web_page", nullable = false, length = 255)
    private String companyWebPage;

    @NotBlank(message = "Email is required")
    @Email(message = "Please enter a valid email address")
    @Column(name = "email", nullable = false, unique = true, length = 100)
    private String email;

    @NotBlank(message = "Phone number is required")
    @Pattern(regexp = "^[0-9]{10,15}$", message = "Phone number must be between 10 and 15 digits")
    @Column(name = "phone_number", nullable = false, length = 15)
    private String phoneNumber;

    @NotBlank(message = "Password is required")
    @Size(min = 6, max = 100, message = "Password must be at least 6 characters")
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @Column(name = "password", nullable = false, length = 255)
    private String password;

    @Transient
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String rePassword;

    @OneToMany(mappedBy = "employer", cascade = CascadeType.ALL)
    private List<JobAdvertisement> jobAdvertisements;

    // Default constructor
    public Employer() {
    }

    // Parameterized constructor
    public Employer(int id, String companyName, String companyWebPage, String email,
                    String phoneNumber, String password, String rePassword,
                    List<JobAdvertisement> jobAdvertisements) {
        this.id = id;
        this.companyName = companyName;
        this.companyWebPage = companyWebPage;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.password = password;
        this.rePassword = rePassword;
        this.jobAdvertisements = jobAdvertisements;
    }

    // Getters and Setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getCompanyWebPage() {
        return companyWebPage;
    }

    public void setCompanyWebPage(String companyWebPage) {
        this.companyWebPage = companyWebPage;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
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

    public List<JobAdvertisement> getJobAdvertisements() {
        return jobAdvertisements;
    }

    public void setJobAdvertisements(List<JobAdvertisement> jobAdvertisements) {
        this.jobAdvertisements = jobAdvertisements;
    }
}