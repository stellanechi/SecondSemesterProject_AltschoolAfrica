const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div className="p-4 rounded-lg shadow-md max-w-3xl mx-auto flex flex-col gap-3  bg-yellow-100">
      <p className="text-xl font-semibold text-center">Something went wrong:</p>
      <pre className="text-red-500 font-medium">{error.message}</pre>
      <button
        className="bg-blue-500 text-white px-3 py-2 rounded-lg font-semibold hover:scale-110 transition-all duration-300 w-max mx-auto"
        onClick={resetErrorBoundary}
      >
        Try again
      </button>
    </div>
  );
};

export default ErrorFallback;
