package hrms.hrms.core.utilities.results;

public class ErrorResult implements Result {
    private String message;

    public ErrorResult() {
        this.message = "Error";
    }

    public ErrorResult(String message) {
        this.message = message;
    }

    @Override
    public boolean isSuccess() {
        return false;
    }

    @Override
    public String getMessage() {
        return this.message;
    }
}
