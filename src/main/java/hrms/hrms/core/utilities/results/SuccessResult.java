package hrms.hrms.core.utilities.results;

public class SuccessResult implements Result {
    private String message;

    public SuccessResult() {
        this.message = "Success";
    }

    public SuccessResult(String message) {
        this.message = message;
    }

    @Override
    public boolean isSuccess() {
        return true;
    }

    @Override
    public String getMessage() {
        return this.message;
    }
}
