// Simple interactivity for the wishlist button
document.querySelectorAll(".wishlist-btn").forEach((button) => {
  button.addEventListener("click", function () {
    const icon = this.querySelector("i");
    if (icon.classList.contains("far")) {
      icon.classList.remove("far");
      icon.classList.add("fas");
      this.classList.add("active");
    } else {
      icon.classList.remove("fas");
      icon.classList.add("far");
      this.classList.remove("active");
    }
  });
});

// Add to cart functionality would go here
document.querySelectorAll(".add-to-cart").forEach((button) => {
  button.addEventListener("click", function () {
    alert("Added to cart!");
    // In a real implementation, you would update the cart count
  });
});
