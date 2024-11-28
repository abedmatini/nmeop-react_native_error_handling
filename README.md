# coding-project-template

npm install --loglevel=error
Note: Setting loglevel=error will log any errors that are thrown during the installation on the console.


try-catch-finally	:

try {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  // Check if the response is successful
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  const result = await response.json();
  setData(result); // Set the fetched data
} catch (err) {
  // Handle error
  setError(err.message);
} finally {
  setLoading(false); // Hide loader
}
