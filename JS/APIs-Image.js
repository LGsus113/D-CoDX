const API_KEY = "5m2gq8NkRIry0zy7BkOFg75xTabSHoJcan2GoE7HSIY";

const API_URL = (searchQuery, page) =>
  `https://api.unsplash.com/search/photos?query=${searchQuery}&client_id=${API_KEY}&per_page=10&page=${page}`;

function createImageFetcher(
  container,
  viewToggleButton = null,
  paginationSelector = null,
  initialQuery
) {
  let currentPage = 1;
  let query = initialQuery;

  async function fetchImages(queries, currentPagination, container) {
    try {
      const response = await fetch(API_URL(queries, currentPagination));

      if (!response.ok) {
        throw new Error("Error en la solicitud");
      }

      const data = await response.json();
      container.innerHTML = "";

      const totalPages = Math.ceil(data.total / 10);
      if (paginationSelector) {
        updatePaginationSelector(totalPages);
      }

      data.results.forEach((image) => {
        const imgContainer = document.createElement("div");
        imgContainer.classList.add("image-container");

        const imgElement = document.createElement("img");
        imgElement.src = image.urls.regular;
        imgElement.alt = image.alt_description || "Imagen de Unsplash";

        const description = document.createElement("h1");
        description.classList.add("description");

        let descriptionText = image.alt_description || "Sin descripción";
        descriptionText =
          descriptionText.charAt(0).toUpperCase() +
          descriptionText.slice(1).toLowerCase();

        description.textContent = descriptionText;

        imgContainer.appendChild(imgElement);
        imgContainer.appendChild(description);

        container.appendChild(imgContainer);
      });
    } catch (error) {
      console.error("Error al cargar las imágenes:", error);
    }
  }
  
  function updatePaginationSelector(totalPages) {
    const maxPagesToShow = Math.min(totalPages, 50);

    paginationSelector.innerHTML = "";

    for (let i = 1; i <= maxPagesToShow; i++) {
      const option = document.createElement("option");
      option.value = i;
      option.textContent = `Página ${i}`;
      paginationSelector.appendChild(option);
    }

    paginationSelector.value = currentPage.toString();
  }

  if (paginationSelector) {
    paginationSelector.addEventListener("change", (e) => {
      currentPage = parseInt(e.target.value);
      fetchImages(query, currentPage, container);
    });
  }

  if (viewToggleButton) {
    viewToggleButton.addEventListener("click", () => {
      if (viewToggleButton.textContent === "Diseño Web") {
        query = "mobile+design+trends";
        viewToggleButton.textContent = "Diseño Móvil";
      } else {
        query = "web+design+trends";
        viewToggleButton.textContent = "Diseño Web";
      }

      currentPage = 1;
      fetchImages(query, currentPage, container);
    });
  }

  fetchImages(query, currentPage, container);
}
