package hrms.hrms.core.utilities.results;

public class ErrorDataResult<T> extends ErrorResult implements DataResult<T> {
    private T data;

    public ErrorDataResult(T data) {
        super();
        this.data = data;
    }

    public ErrorDataResult(T data, String message) {
        super(message);
        this.data = data;
    }

    public ErrorDataResult(String message) {
        super(message);
        this.data = null;
    }

    @Override
    public T getData() {
        return this.data;
    }
}
