package hrms.hrms.entities.concretes;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "job_advertisement")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class JobAdvertisement {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int advertisementId;

    @Column(name = "open_position_count")
    private int openPositionCount;

    @Column(name = "description")
    private String description;

    @Column(name = "min_salary")
    private int minSalary;

    @Column(name = "max_salary")
    private int maxSalary;

    @Column(name = "job_release_date")
    private LocalDate jobReleaseDate;

    @Column(name = "application_deadline")
    private LocalDate applicationDeadline;

    @ManyToOne
    @JoinColumn(name = "job_position_id")
    private JobPosition jobPosition;

    @ManyToOne
    @JoinColumn(name = "city_id")
    private City city;

    @ManyToOne
    @JoinColumn(name = "employer_id")
    private Employer employer;

    // Default constructor
    public JobAdvertisement() {
    }

    // Parameterized constructor
    public JobAdvertisement(int advertisementId, int openPositionCount, String description,
                            int minSalary, int maxSalary, LocalDate jobReleaseDate,
                            LocalDate applicationDeadline, JobPosition jobPosition,
                            City city, Employer employer) {
        this.advertisementId = advertisementId;
        this.openPositionCount = openPositionCount;
        this.description = description;
        this.minSalary = minSalary;
        this.maxSalary = maxSalary;
        this.jobReleaseDate = jobReleaseDate;
        this.applicationDeadline = applicationDeadline;
        this.jobPosition = jobPosition;
        this.city = city;
        this.employer = employer;
    }

    // Getters and Setters
    public int getAdvertisementId() {
        return advertisementId;
    }

    public void setAdvertisementId(int advertisementId) {
        this.advertisementId = advertisementId;
    }

    public int getOpenPositionCount() {
        return openPositionCount;
    }

    public void setOpenPositionCount(int openPositionCount) {
        this.openPositionCount = openPositionCount;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getMinSalary() {
        return minSalary;
    }

    public void setMinSalary(int minSalary) {
        this.minSalary = minSalary;
    }

    public int getMaxSalary() {
        return maxSalary;
    }

    public void setMaxSalary(int maxSalary) {
        this.maxSalary = maxSalary;
    }

    public LocalDate getJobReleaseDate() {
        return jobReleaseDate;
    }

    public void setJobReleaseDate(LocalDate jobReleaseDate) {
        this.jobReleaseDate = jobReleaseDate;
    }

    public LocalDate getApplicationDeadline() {
        return applicationDeadline;
    }

    public void setApplicationDeadline(LocalDate applicationDeadline) {
        this.applicationDeadline = applicationDeadline;
    }

    public JobPosition getJobPosition() {
        return jobPosition;
    }

    public void setJobPosition(JobPosition jobPosition) {
        this.jobPosition = jobPosition;
    }

    public City getCity() {
        return city;
    }

    public void setCity(City city) {
        this.city = city;
    }

    public Employer getEmployer() {
        return employer;
    }

    public void setEmployer(Employer employer) {
        this.employer = employer;
    }
}