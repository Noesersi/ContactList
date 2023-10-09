export const fetchData = async () => {
    try {
      const response = await fetch(
        "https://contact-list-79285-default-rtdb.europe-west1.firebasedatabase.app/nit/contactos.json"
      );
      if (response.ok) {
        const jsonData = await response.json();
        return Object.entries(jsonData);
      } else {
        throw new Error("Network response was not ok.");
      }
    } catch (error) {
      throw new Error("Error fetching data: " + error.message);
    }
  };
  