package hrms.hrms.core.utilities.results;

public class SuccessDataResult<T> extends SuccessResult implements DataResult<T> {
    private T data;

    public SuccessDataResult(T data) {
        super();
        this.data = data;
    }

    public SuccessDataResult(T data, String message) {
        super(message);
        this.data = data;
    }

    @Override
    public T getData() {
        return this.data;
    }
}
