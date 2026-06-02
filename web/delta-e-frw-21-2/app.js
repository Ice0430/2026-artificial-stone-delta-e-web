const STANDARD_LAB = {
  frw_21_2_sandblasting: {
    f2_0uv: { label: "F2-10 / 0%UV", l: 97.44, a: -0.06, b: 0.17 },
    d65_0uv: { label: "D65-10 / 0%UV", l: 97.44, a: -0.46, b: 0.76 },
    f2_100uv: { label: "F2-10 / 100%UV", l: 97.45, a: 0.57, b: -2.85 },
    d65_100uv: { label: "D65-10 / 100%UV", l: 97.51, a: 0.41, b: -1.84 },
  },
};

const CIE94_FACTORS = {
  sl: 1,
  kl: 2,
  kc: 1,
  kh: 1,
  k1: 0.045,
  k2: 0.015,
};

const form = document.querySelector("#delta-form");
const clearButton = document.querySelector("#clear-button");
const result = document.querySelector("#delta-result");
const deltaL = document.querySelector("#delta-l");
const deltaA = document.querySelector("#delta-a");
const deltaB = document.querySelector("#delta-b");
const deltaE76 = document.querySelector("#delta-e-76");
const processSelect = document.querySelector("#process-select");
const conditionSelect = document.querySelector("#condition-select");
const standardLInput = form.elements.standardL;
const standardAInput = form.elements.standardA;
const standardBInput = form.elements.standardB;

function currentStandard() {
  return STANDARD_LAB[processSelect.value][conditionSelect.value];
}

function setStandardInputs() {
  const standard = currentStandard();
  standardLInput.value = standard.l.toFixed(2);
  standardAInput.value = standard.a.toFixed(2);
  standardBInput.value = standard.b.toFixed(2);
}

function readLabValues(formData) {
  return {
    standard: {
      l: Number(formData.get("standardL")),
      a: Number(formData.get("standardA")),
      b: Number(formData.get("standardB")),
    },
    sample: {
      l: Number(formData.get("sampleL")),
      a: Number(formData.get("sampleA")),
      b: Number(formData.get("sampleB")),
    },
  };
}

function calculateCie94({ standard, sample }) {
  const dl = sample.l - standard.l;
  const da = sample.a - standard.a;
  const db = sample.b - standard.b;
  const c1 = Math.sqrt(standard.a ** 2 + standard.b ** 2);
  const c2 = Math.sqrt(sample.a ** 2 + sample.b ** 2);
  const cMean = Math.sqrt(c1 * c2);
  const dc = c2 - c1;
  const de76 = Math.sqrt(dl ** 2 + da ** 2 + db ** 2);
  const de76Squared = de76 ** 2;
  const lightnessChromaSquared = dl ** 2 + dc ** 2;
  const dhStarSquared = de76Squared - lightnessChromaSquared;
  const dh = de76Squared > lightnessChromaSquared ? Math.sqrt(dhStarSquared) : 0;
  const sc = 1 + CIE94_FACTORS.k1 * cMean;
  const sh = 1 + CIE94_FACTORS.k2 * cMean;
  const cie94 = Math.sqrt(
    (dl / (CIE94_FACTORS.kl * CIE94_FACTORS.sl)) ** 2
      + (dc / (sc * CIE94_FACTORS.kc)) ** 2
      + (dh / (CIE94_FACTORS.kh * sh)) ** 2,
  );

  return {
    value: cie94,
    dl,
    da,
    db,
    de76,
  };
}

function formatNumber(value) {
  if (!Number.isFinite(value)) {
    return "--";
  }

  return value.toFixed(2);
}

function render(delta) {
  result.value = formatNumber(delta.value);
  deltaL.textContent = formatNumber(delta.dl);
  deltaA.textContent = formatNumber(delta.da);
  deltaB.textContent = formatNumber(delta.db);
  deltaE76.textContent = formatNumber(delta.de76);
}

function calculateFromForm() {
  setStandardInputs();
  const values = readLabValues(new FormData(form));
  render(calculateCie94(values));
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  calculateFromForm();
});

form.addEventListener("input", calculateFromForm);

processSelect.addEventListener("change", calculateFromForm);
conditionSelect.addEventListener("change", calculateFromForm);

clearButton.addEventListener("click", () => {
  form.elements.sampleL.value = "";
  form.elements.sampleA.value = "";
  form.elements.sampleB.value = "";
  render({ value: NaN, dl: NaN, da: NaN, db: NaN, de76: NaN });
});

calculateFromForm();
