// script.js

// Example JavaScript for interacting with your HTML pages (replace with actual functionality)

// Example AJAX call to fetch expenses from expenses.json
function fetchExpenses() {
  fetch("expenses.json")
    .then((response) => response.json())
    .then((data) => {
      console.log("Expenses:", data);
      // Update HTML content dynamically with fetched data
      const expensesTable = document.getElementById("expenses-table-body");
      expensesTable.innerHTML = ""; // Clear previous data
      data.forEach((expense) => {
        const row = document.createElement("tr");
        row.innerHTML = `
                    <td>${expense.expense}</td>
                    <td>${expense.category}</td>
                    <td>${expense.amount}</td>
                    <td>${expense.date}</td>
                    <td>${expense.time}</td>
                `;
        expensesTable.appendChild(row);
      });
    })
    .catch((error) => console.error("Error fetching expenses:", error));
}

// Example function call on page load
window.onload = function () {
  fetchExpenses();
  // Add other initialization logic here if needed
};
