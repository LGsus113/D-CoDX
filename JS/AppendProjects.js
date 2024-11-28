const sectionData = [
  {
    title: "Diseño Web",
    author: "Mery Correa",
    description: "Soy increíble",
    imagenes: [
      {
        src: "../Tools/Images/Utilities/Proyectos/image2.png",
        brightness: 1.2,
      },
      {
        src: "../Tools/Images/Utilities/Proyectos/image1.png",
        brightness: 1.2,
      },
    ],
    imagenesDos: [
      { src: "../Tools/Images/Utilities/Proyectos/ImagenesDos/web-future.gif" },
      {
        src: "../Tools/Images/Utilities/Proyectos/ImagenesDos/web-heladeria.gif",
      },
      {
        src: "../Tools/Images/Utilities/Proyectos/ImagenesDos/web-macdonalds.gif",
      },
      {
        src: "../Tools/Images/Utilities/Proyectos/ImagenesDos/web-performance.gif",
      },
      { src: "../Tools/Images/Utilities/Proyectos/ImagenesDos/web-tesla.gif" },
    ],
  },
  {
    title: "Aplicaciones Móviles",
    author: "Samuel López",
    description: "Soy papucho",
    imagenes: [
      {
        src: "../Tools/Images/Utilities/Proyectos/image4.png",
        brightness: 1.3,
      },
      {
        src: "../Tools/Images/Utilities/Proyectos/image3.jpg",
        brightness: 1.0,
      },
    ],
    imagenesDos: [
      {
        src: "../Tools/Images/Utilities/Proyectos/ImagenesDos/moviles-avatars.gif",
      },
      {
        src: "../Tools/Images/Utilities/Proyectos/ImagenesDos/moviles-calications.gif",
      },
      {
        src: "../Tools/Images/Utilities/Proyectos/ImagenesDos/moviles-dashboards.gif",
      },
      {
        src: "../Tools/Images/Utilities/Proyectos/ImagenesDos/moviles-dashboardsAnalitics.gif",
      },
      {
        src: "../Tools/Images/Utilities/Proyectos/ImagenesDos/moviles-sports.gif",
      },
    ],
  },
  {
    title: "Colaboraciones",
    author: "Lorena Gutiérrez",
    description: "Soy bonita",
    imagenes: [
      {
        src: "../Tools/Images/Utilities/Proyectos/image6.png",
        brightness: 1.0,
      },
      {
        src: "../Tools/Images/Utilities/Proyectos/image5.png",
        brightness: 1.05,
      },
    ],
    imagenesDos: [
      {
        src: "../Tools/Images/Utilities/Proyectos/ImagenesDos/colaboraciones-creations.jpeg",
      },
      {
        src: "../Tools/Images/Utilities/Proyectos/ImagenesDos/colaboraciones-discussions.avif",
      },
      {
        src: "../Tools/Images/Utilities/Proyectos/ImagenesDos/colaboraciones-integrations.jpg",
      },
      {
        src: "../Tools/Images/Utilities/Proyectos/ImagenesDos/colaboraciones-programador.jpg",
      },
      {
        src: "../Tools/Images/Utilities/Proyectos/ImagenesDos/colaboraciones-sala.webp",
      },
    ],
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".primerSection");

  // Crear las secciones de proyecto
  sectionData.forEach((section) => {
    const projectSection = document.createElement("project-section");

    projectSection.setAttribute("title", section.title);
    projectSection.setAttribute("author", section.author);
    projectSection.setAttribute("description", section.description);
    projectSection.setAttribute("images", JSON.stringify(section.imagenes));
    projectSection.setAttribute(
      "moreImages",
      JSON.stringify(section.imagenesDos)
    ); // Añadí el atributo 'moreImages'

    container.appendChild(projectSection);
  });

  const modal = document.getElementById("modal");
  const modalContent = modal.querySelector(".modal-content");

  // Abre el modal con la información del proyecto
  function openModal(e) {
    if (!e.target.classList.contains("open-modal")) return;

    const title = e.target.getAttribute("data-title");
    const author = e.target.getAttribute("data-author");
    const description = e.target.getAttribute("data-description");
    const moreImages = JSON.parse(e.target.getAttribute("data-more-images"));

    modalContent.innerHTML = `
      <div class="area-text">
        <h2>${title}</h2>
        <p><strong>Autor:</strong> ${author}</p>
        <p class="text-user">${description}</p>
      </div>
      <div class="modal-images">
        ${moreImages
          .map(
            (image) => `
            <div class="image-contener-locuas">
              <img src="${image.src}" alt="${title}" />
            </div>`
          )
          .join("")}
      </div>
    `;

    modal.showModal();
  }

  document.body.addEventListener("click", (e) => {
    if (e.target.classList.contains("open-modal")) {
      openModal(e);
    }
  });
});
