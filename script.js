let filters = {
  blur: { value: 0, min: 0, max: 20, unit: "px" },
  brightness: { value: 100, min: 0, max: 200, unit: "%" },
  contrast: { value: 100, min: 0, max: 200, unit: "%" },
  grayscale: { value: 0, min: 0, max: 100, unit: "%" },
  hueRotation: { value: 0, min: 0, max: 360, unit: "deg" },
  invert: { value: 0, min: 0, max: 100, unit: "%" },
  opacity: { value: 100, min: 0, max: 100, unit: "%" },
  saturation: { value: 100, min: 0, max: 200, unit: "%" },
  sepia: { value: 0, min: 0, max: 100, unit: "%" },
};

const imageCanvas = document.querySelector("#image-canvas");
const imgInput = document.querySelector("#image-input");
const filterContainer = document.querySelector(".filters");
const presetsContainer = document.querySelector(".presets");
const imagePlaceholder = document.querySelector(".placeholder");
const resetButton = document.querySelector("#reset-btn");
const downloadButton = document.querySelector("#download-btn");

const canvasCtx = imageCanvas.getContext("2d");

let image = null;

function createFilter(name, value, min, max) {
  const div = document.createElement("div");
  div.classList.add("filter");

  const label = document.createElement("p");
  label.innerText = name;

  const input = document.createElement("input");
  input.type = "range";
  input.value = value;
  input.min = min;
  input.max = max;

  input.addEventListener("input", () => {
    filters[name].value = input.value;
    applyFilters();
  });

  div.append(label, input);
  return div;
}

function createFilters() {
  filterContainer.innerHTML = "";
  Object.keys(filters).forEach((key) => {
    const f = filters[key];
    filterContainer.appendChild(
      createFilter(key, f.value, f.min, f.max)
    );
  });
}

function applyFilters() {
  if (!image) return;

  canvasCtx.clearRect(0, 0, imageCanvas.width, imageCanvas.height);
  canvasCtx.filter = `
    brightness(${filters.brightness.value}${filters.brightness.unit})
    contrast(${filters.contrast.value}${filters.contrast.unit})
    saturate(${filters.saturation.value}${filters.saturation.unit})
    hue-rotate(${filters.hueRotation.value}${filters.hueRotation.unit})
    blur(${filters.blur.value}${filters.blur.unit})
    grayscale(${filters.grayscale.value}${filters.grayscale.unit})
    sepia(${filters.sepia.value}${filters.sepia.unit})
    opacity(${filters.opacity.value}${filters.opacity.unit})
    invert(${filters.invert.value}${filters.invert.unit})
  `;
  canvasCtx.drawImage(image, 0, 0);
}

imgInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const img = new Image();
  img.src = URL.createObjectURL(file);

  img.onload = () => {
    image = img;
    imageCanvas.width = img.width;
    imageCanvas.height = img.height;
    imageCanvas.style.display = "block";
    imagePlaceholder.style.display = "none";
    applyFilters();
  };
});

resetButton.addEventListener("click", () => {
  filters = {
    blur: { value: 0, min: 0, max: 20, unit: "px" },
    brightness: { value: 100, min: 0, max: 200, unit: "%" },
    contrast: { value: 100, min: 0, max: 200, unit: "%" },
    grayscale: { value: 0, min: 0, max: 100, unit: "%" },
    hueRotation: { value: 0, min: 0, max: 360, unit: "deg" },
    invert: { value: 0, min: 0, max: 100, unit: "%" },
    opacity: { value: 100, min: 0, max: 100, unit: "%" },
    saturation: { value: 100, min: 0, max: 200, unit: "%" },
    sepia: { value: 0, min: 0, max: 100, unit: "%" },
  };
  createFilters();
  applyFilters();
});

downloadButton.addEventListener("click", () => {
  const link = document.createElement("a");
  link.download = "edited-image.png";
  link.href = imageCanvas.toDataURL();
  link.click();
});

const presets = {
  normal: { blur: 0, brightness: 100, contrast: 100, grayscale: 0, hueRotation: 0, invert: 0, opacity: 100, saturation: 100, sepia: 0 },
  drama: { blur: 0, brightness: 95, contrast: 140, grayscale: 0, hueRotation: 0, invert: 0, opacity: 100, saturation: 130, sepia: 0 },
  vintage: { blur: 1, brightness: 105, contrast: 90, grayscale: 10, hueRotation: 0, invert: 0, opacity: 100, saturation: 85, sepia: 30 },
  oldSchool: { blur: 2, brightness: 110, contrast: 85, grayscale: 20, hueRotation: 0, invert: 0, opacity: 100, saturation: 70, sepia: 40 },
  cinematic: { blur: 0, brightness: 90, contrast: 150, grayscale: 0, hueRotation: 10, invert: 0, opacity: 100, saturation: 120, sepia: 5 },
  blackAndWhite: { blur: 0, brightness: 100, contrast: 120, grayscale: 100, hueRotation: 0, invert: 0, opacity: 100, saturation: 0, sepia: 0 },
  cool: { blur: 0, brightness: 100, contrast: 110, grayscale: 0, hueRotation: 200, invert: 0, opacity: 100, saturation: 120, sepia: 0 },
  warm: { blur: 0, brightness: 105, contrast: 110, grayscale: 0, hueRotation: 20, invert: 0, opacity: 100, saturation: 120, sepia: 15 },
  faded: { blur: 1, brightness: 110, contrast: 80, grayscale: 0, hueRotation: 0, invert: 0, opacity: 100, saturation: 70, sepia: 10 },
  horror: { blur: 0, brightness: 80, contrast: 160, grayscale: 20, hueRotation: 180, invert: 0, opacity: 100, saturation: 90, sepia: 0 },
};

Object.keys(presets).forEach((name) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = name;

  btn.addEventListener("click", () => {
    Object.keys(presets[name]).forEach((key) => {
      filters[key].value = presets[name][key];
    });
    createFilters();
    applyFilters();
  });

  presetsContainer.appendChild(btn);
});

createFilters();
