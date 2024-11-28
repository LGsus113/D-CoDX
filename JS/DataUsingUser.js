class ProjctSection extends HTMLElement {
  connectedCallback() {
    const title = this.getAttribute("title");
    const author = this.getAttribute("author");
    const description = this.getAttribute("description");
    const images = JSON.parse(this.getAttribute("images"));
    const moreImages = JSON.parse(this.getAttribute("moreImages"));

    this.innerHTML = `
      <section class="generalSection">
        <h3 class="nameSectionGeneral" style="--bolder: bold">
          ${title}:
          <span class="name" style="--bolder: 300">${author}</span>
          <span class="cursor">_</span>
        </h3>
        <div class="project-grid">
          ${images
            .map(
              (image, index) => `
              <div class="project-card" style="--tamaño: ${
                index === 0 ? "35%" : "65%"
              }">
                <img
                  src="${image.src}"
                  alt="${title}"
                  style="--brightness: ${image.brightness}"
                />
              </div>
            `
            )
            .join("")}
        </div>
        <button
          class="open-modal"
          data-title="${title}"
          data-author="${author}"
          data-description="${description}"
          data-more-images='${JSON.stringify(moreImages)}'
        >
          Ver más <span class="arrow">→</span>
        </button>
      </section>
    `;
  }
}

customElements.define("project-section", ProjctSection);
