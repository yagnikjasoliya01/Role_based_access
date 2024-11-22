const Unauthorized = () => (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-red-500 animate-bounce mb-4">
        403 - Unauthorized
      </h1>
      <p className="text-lg text-gray-700">
        Sorry, you don’t have permission to view this page.
      </p>
    </div>
  );
  
  export default Unauthorized;
  