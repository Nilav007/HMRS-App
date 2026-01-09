package hrms.hrms.entities.concretes;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "city")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler", "jobAdvertisements"})
public class City {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "city_id")
    private int id;

    @NotBlank(message = "City name is required")
    @Size(min = 2, max = 100, message = "City name must be between 2 and 100 characters")
    @Column(name = "city_name", nullable = false, length = 100)
    private String cityName;

    @OneToMany(mappedBy = "city")
    private List<JobAdvertisement> jobAdvertisements;

    // Default constructor
    public City() {
    }

    // Parameterized constructor
    public City(int id, String cityName, List<JobAdvertisement> jobAdvertisements) {
        this.id = id;
        this.cityName = cityName;
        this.jobAdvertisements = jobAdvertisements;
    }

    // Getters and Setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCityName() {
        return cityName;
    }

    public void setCityName(String cityName) {
        this.cityName = cityName;
    }

    public List<JobAdvertisement> getJobAdvertisements() {
        return jobAdvertisements;
    }

    public void setJobAdvertisements(List<JobAdvertisement> jobAdvertisements) {
        this.jobAdvertisements = jobAdvertisements;
    }
}